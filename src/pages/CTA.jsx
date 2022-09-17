import React from 'react'
import Image from "../Images/ss.png";
export default function CTA() {
    return <div>
        <section id="component-1db4588d58587eda7cf40b260dc30833">
            <div class="flex items-center justify-between">
                <div class="flex min-w-0 items-center">
                    <h2 class="truncate text-base font-medium leading-7 text-slate-900"><a href="#component-1db4588d58587eda7cf40b260dc30833">Simple center branded</a></h2>
                    <p class="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-100 py-0.5 px-2 text-xs font-semibold leading-6 text-slate-700 lg:block">PNG Preview</p>
                </div>
                <a class="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600" href="/components#pricing">Get the code <span aria-hidden="true">→</span></a>
            </div><div class="mt-4 overflow-hidden rounded-lg bg-white ring-1 ring-slate-900/5">
                <img class="h-auto w-full sm:hidden" loading="lazy" src={Image} width="375" height="430" />
                <img class="hidden h-auto w-full sm:block" loading="lazy" src={Image} width="1280" height="386" />
            </div>
        </section>
    </div>
}
