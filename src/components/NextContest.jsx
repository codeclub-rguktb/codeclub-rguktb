import React from 'react';
import { Link } from 'react-router-dom';
function NextContest() {
    return (
        <>
            <div class="p-6 mt-16  mr-auto ml-auto drop-shadow-lg border-gray-900 rounded-lg bg-white text-gray-700">
                <h2 class="font-semibold text-3xl mb-5 text-center">Next Contest !!</h2>
                <p className='text-center'>
                    Be held for the upcoming competitions of CP
                </p>
                <hr class="my-6 border-gray-300" />
                {/* <p>
                    Click the below button to checkout our contests here contest
                </p> */}
                <Link to="/contest">
                    <div class='flex w-full items-center justify-center'>
                        <button
                            type="button"
                            class="inline-block px-6 py-2.5 mt-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out text-center"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                        >
                            Checkout our contests here
                        </button>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default NextContest
