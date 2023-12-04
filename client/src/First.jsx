// eslint-disable-next-line no-unused-vars
import React from 'react';

function First() {
  return (
    <div>
      <section className="bg-white">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className=" mb-6 text-8xl font-extrabold tracking-tight leading-none md:text-8xl mb-6 h-28 xl:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-violet-800 to-blue-500">
              Mess Manager
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
             Simplify the mess management
            </p>

            <a
              href="/login"
              className="inline-flex w-24 items-center justify-center px-5 py-3 text-base font-medium text-center bg-gradient-to-r from-violet-500 to-blue-500 text-white rounded-lg hover:bg-gradient-to-r hover:from-violet-700 hover:to-blue-600 transition duration-300"
            >
              User
            </a>
            <a
              href="/admin"
              className="inline-flex ml-4 items-center justify-center px-5 py-3 text-base font-medium text-center bg-gradient-to-r from-violet-500 to-blue-500 text-white rounded-lg hover:bg-gradient-to-r hover:from-violet-700 hover:to-blue-600 transition duration-300"
            >
              Admin
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://media.istockphoto.com/id/1322628932/photo/poke-bowl-with-salmon-avocado-quinoa-and-cucumber.jpg?s=612x612&w=0&k=20&c=dxyEXDzNYYjmKfNzi6QegEJQTbE-1jZZB4HtQKQABhs=" alt="mockup" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default First;
