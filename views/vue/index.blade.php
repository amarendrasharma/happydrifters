@extends('layouts.app')

@section('content')
    <div class="bg-light">
		<div class="d-flex">
			<div
				class="d-none d-md-block w-100 vh-100 shadow position-fixed text-white"
				style="z-index: 1; background: #2F365F; max-width:240px; height: 100vh;overflow-y: auto;"
			>
				<!-- style="border-top: 3px solid #00bf74;" -->
				<div class="d-flex h-100 flex-column">
					<div class="px-3 d-flex w-100 align-items-center" style="min-height: 75px">  
							<span class="d-block font-weight-500 ml-3">Soft Invoice App</span>  
					</div>
					<div class="pb-3 flex-grow-1">
						<b-nav vertical class="d-block">
							<span v-for="(sidebaritem, index) in sidebaritems" :key="index">
								<h6
									style="padding-left: 2.15rem"
									class="text-white-light text-xs text-uppercase tracking-wide mt-4 py-2 mb-0"
									v-if="sidebaritem.type == 'divider'"
								>@{{ sidebaritem.title }}</h6>
								<b-nav-item
									v-if="sidebaritem.type == 'link'"
									class="nav-custom"
									{{-- :class="{'active' : $route.path == sidebaritem.to }" --}}
									:to="sidebaritem.to"
								>@{{ sidebaritem.title }}</b-nav-item>
							</span>
							<b-nav-item class="nav-custom" href="{{ route('logout') }}"
							onclick="event.preventDefault();
									document.getElementById('logout-form').submit();"
							>Log out</b-nav-item>
							
							<form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
								@csrf
							</form>
						</b-nav> 
					</div>
					{{-- <div class="py-3 px-4 d-flex align-items-center justify-content-between">
						<span class="text-xs text-white-light">
							2019 &copy; Invoice App
						</span>
						<img src="/images/aboutus.png" alt="" height="50px">
					</div> --}}
				</div>
			</div>
			<div class="col-md-9 ml-sm-auto col-lg-10 px-0">
				<div class="px-5 py-3">
					<router-view/>
				</div>
			</div>
		</div> 
	</div>
@endsection