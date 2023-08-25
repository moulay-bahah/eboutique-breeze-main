import {  Head } from '@inertiajs/react';
import { PageProps } from '@/types'; 
import NavGlobale from '@/Components/NavGlobale';
import ArticleItem from '@/Components/ArticleItem';

import GuestLayout from '@/Layouts/GuestLayout';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    return (
        <>
         
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    <NavGlobale isAuth={ Boolean(auth.user) } />
                </div>

                <div className="max-w-7xl mx-auto p-6 lg:p-8">
              
                        
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                        <ArticleItem />
                        <ArticleItem />
                        <ArticleItem />
                        <ArticleItem />
                        <ArticleItem />
                        <ArticleItem />
                        <ArticleItem />
                        <ArticleItem />
                        <ArticleItem />
               
                    </div>

                    
  
                   
                </div>
            </div>
             
        </>
    );
}
