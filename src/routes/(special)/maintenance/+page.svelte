<script>
	import Github from '$icons/Github.svelte';
	import Linkedin from '$icons/Linkedin.svelte';
	import X from '$icons/X.svelte';
</script>

<section class="flex flex-col items-center justify-center h-screen w-full bg-red-700">
	<div class="block mb-8">
		<span class="font-integralCF text-8xl tracking-wide text-white">New website cooming soon</span>
	</div>
	<div class="mb-8">
		<span class="font-integralCF text-6xl tracking-wide">stay tuned</span>
	</div>
	<div class="flex justify-center items-center">
		<div class="">
			<h4 class="font-integralCF font-black text-4xl text-white text-right">
				Do you want to get in touch?
			</h4>
			<p class="font-robotoSlab font-extralight text-2xl text-center mt-4">
				Find where you can contact me<br />Using the links below
			</p>
			<div class="mt-8">
				<ul class="flex justify-center space-x-8">
					<li class="inline-flex">
						<a href="https://github.com/FabioDessi" target="_blank">
							<Github className="w-12 h-12 fill-white" />
						</a>
					</li>
					<li class="inline-flex">
						<a href="https://www.linkedin.com/in/fabiodessi/" target="_blank">
							<Linkedin className="w-12 h-12 fill-white" />
						</a>
					</li>
					<li class="inline-flex">
						<a href="https://twitter.com/FabioDessiDev" target="_blank">
							<X className="w-12 h-12 fill-white" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>
