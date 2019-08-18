<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Eloquent\Builder;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Builder::macro('whereLike', function ($attributes, string $searchTerms) {
            $this->where(function (Builder $query) use ($attributes, $searchTerms) {
                foreach (array_wrap($attributes) as $attribute) {
                    $query->when(
                        str_contains($attribute, '.'),
                        function (Builder $query) use ($attribute, $searchTerms) {
                            [$relationName, $relationAttribute] = explode('.', $attribute);

                            $query->orWhereHas($relationName, function (Builder $query) use ($relationAttribute, $searchTerms) {
                                foreach (explode(' ', $searchTerms) as $searchTerm) {
                                    $query->where($relationAttribute, 'LIKE', "%{$searchTerm}%");
                                }
                            });
                        },
                        function (Builder $query) use ($attribute, $searchTerms) {
                            $query->orWhere(function ($query) use ($attribute, $searchTerms) {
                                foreach (explode(' ', $searchTerms) as $searchTerm) {
                                    $query->where($attribute, 'LIKE', "%{$searchTerm}%");
                                }
                            });
                        }
                    );
                }
            });

            return $this;
        });
    }
}
