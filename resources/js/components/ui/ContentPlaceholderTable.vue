<template>
	<div>
		<b-card no-body>
			<table class="table mb-0 table-custom position-relative">
				<thead>
					<tr>
						<th width="140px">
							<div class="px-4 py-2 rounded d-block" style="background: #f1f1f1"></div>
						</th>
						<th>
							<div class="px-4 py-2 rounded d-block" style="background: #f1f1f1"></div>
						</th>
						<th>
							<div class="px-4 py-2 rounded d-block" style="background: #f1f1f1"></div>
						</th>
						<th>
							<div class="px-4 py-2 rounded d-block" style="background: #f1f1f1"></div>
						</th>
						<th>
							<div class="px-4 py-2 rounded d-block" style="background: #f1f1f1"></div>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="i in 10">
						<td>
							<div class="px-4 py-2 bg-grey rounded d-block"></div>
						</td>
						<td>
							<div class="px-4 py-2 bg-grey rounded d-block"></div>
						</td>
						<td>
							<div class="px-4 py-2 bg-grey rounded d-block"></div>
						</td>
						<td>
							<div class="px-4 py-2 bg-grey rounded d-block"></div>
						</td>
						<td>
							<div class="px-4 py-2 bg-grey rounded d-block"></div>
						</td>
					</tr>
				</tbody>
			</table>
		</b-card>
	</div>
</template>
