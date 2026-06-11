'use server';

import Header from '@/components/layout/header';

export default async function Page() {
    return (
        <div>
            <Header />
            <div className="h-screen w-full flex justify-center items-center">
     <h3>HALOO WORLDDD</h3>
            </div>
        </div>
    );
}
