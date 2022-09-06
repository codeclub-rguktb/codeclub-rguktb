import React from 'react';
import { Link } from 'react-router-dom';
function NextContest() {
    return (
        <>
            <div class="p-6 mt-16  mr-auto ml-auto drop-shadow-lg border-gray-900 rounded-lg bg-white text-gray-700">
                <h2 class="font-semibold text-3xl mb-5">Next Contest !!</h2>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling extra attention
                    to featured content or information.
                </p>
                <hr class="my-6 border-gray-300" />
                <p>
                    It uses utility classes for typography and spacing to space content out within the larger
                    container.
                </p>
                <button
                    type="button"
                    class="inline-block px-6 py-2.5 mt-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                >
                    <Link to="/contest">
                        Participate
                    </Link>
                </button>
            </div>
        </>
    )
}

export default NextContest
