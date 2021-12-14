import { StarIcon, LinkIcon } from '@heroicons/react/solid'

export function Carousel() {
    return (
        <div class="carousel relative shadow-2xl bg-white w-screen flex justify-center">
            <div class="flex">
                <div class="relative">
                    <img class="rounded-full h-20 w-20" src="https://www.liveabout.com/thmb/FeWbkEye5kn7wmE96gVodlbFsig=/2121x1193/smart/filters:no_upscale()/GettyImages-638316888-58bd8bc93df78c353c5b8631.jpg" alt=""/>
                        <div class="flex inset-x-10 top-12 rounded-full z-2 absolute items-center justify-center w-10 h-10 bg-indigo-600">
                            <LinkIcon class="h-5 w-5 text-white self-center"/>
                        </div>
                </div>
                <div>
                    <span class="font-sans font-semibold">Danrley</span>
                    <div class="flex">
                        <StarIcon class="h-5 w-5 text-yellow-400 self-center"/>
                        <StarIcon class="h-5 w-5 text-yellow-400 self-center"/>
                        <StarIcon class="h-5 w-5 text-yellow-400 self-center"/>
                        <StarIcon class="h-5 w-5 text-yellow-400 self-center"/>
                    </div>
                </div>
            </div>
        </div>
    )
}