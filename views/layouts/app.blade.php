<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    {{-- <script src="{{ asset('js/app.js') }}" defer></script> --}}

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link
      href="https://fonts.googleapis.com/css?family=Rubik:400,400i,500,700"
      rel="stylesheet"
      type="text/css"
    />

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <style>
        #app {
            /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
            /* -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale; */
            font-family: "Inter UI", sans-serif;
            /* text-align: center;
        color: #2c3e50;
        margin-top: 60px; */
        }

        .fade-enter-active,
        .fade-leave-active {
            transition: opacity 0.3s ease-in-out;
        }
        .fade-enter,
        .fade-leave-to {
            opacity: 0;
        }

        /* .table-custom .custom-control {
            min-height: 1.125rem !important;
            padding-left: 0.2rem !important;
        } */

        /* Make clicks pass-through */
        #nprogress {
            pointer-events: none;
        }

        #nprogress .bar {
            background: #5661B3;

            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;

            width: 100%;
            height: 2px;
        }

        [v-cloak] {display: none}
    </style>
    @yield('css')
</head>
<body>
    <div id="app">
        <main>
            @yield('content')
        </main>
    </div>
    <script>
        window.user = {!!json_encode(auth()->user())!!}
    </script>
    <script src="{{ asset('js/manifest.js') }}"></script>
    <script src="{{ asset('js/vendor.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script> 
</body>
</html>
