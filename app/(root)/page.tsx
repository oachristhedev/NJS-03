import React from "react";
import "../globals.css";

export default function LandingPage() {
  return (
    <>
      <header className="flex items-center py-5 border-b border-gray-300 px-[5vw]">
        {/* --------------------------------------------------------------------------- */}
        <nav className="flex w-[30vw] items-center">
          <ul className="flex flex-1 gap-30">
            <li>
              <a
                href="#"
                className="text-gray-900 text-[18px] hover:text-gray-500 hover:transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 text-[18px] hover:text-gray-500 hover:transition-colors duration-300"
              >
                Journey
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 text-[18px] hover:text-gray-500 hover:transition-colors duration-300"
              >
                Services
              </a>
            </li>
          </ul>
        </nav>
        {/* --------------------------------------------------------------------------- */}
        <div className="flex w-[40vw] text-[36px] justify-center items-center text-gray-900">
          oachristhedev
        </div>
        {/* --------------------------------------------------------------------------- */}
        <div className="flex w-[30vw] justify-end items-center gap-15">
          <button className="but text-gray-900 text-[18px] hover:text-gray-500 hover:transition-colors duration-300">
            Contacts
          </button>
          <button className="but w-fit rounded bg-gray-900 text-gray-50 text-[18px] hover:bg-gray-300 hover:text-gray-900 transition-colors duration-300">
            Get In Touch
          </button>
        </div>
        {/* --------------------------------------------------------------------------- */}
      </header>
      {/* --------------------------------------------------------------------------- */}
      <main className="flex flex-col  bg-gray-100 px-[5vw]">
        {/* --------------------------------------------------------------------------- */}
        {/* Page 01 */}
        {/* --------------------------------------------------------------------------- */}
        <section className="flex flex-col box-border justify-center gap-15 py-[10vh]">
          {/* --------------------------------------------------------------------------- */}

          <h1 className="text-gray-900 capitalize">It begins NOW!</h1>
          {/* --------------------------------------------------------------------------- */}
          <div className="flex h-[60vh] gap-4">
            <div className="flex flex-[3] h-full bg-gray-300">.</div>
            {/* --------------------------------------------------------------------------- */}
            <div className="flex flex-col flex-1  px-8 py-16 justify-between h-full bg-gray-900 text-gray-50">
              <div className="flex flex-col">
                <h3>Header</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis ducimus rem adipisci eos fuga veniam odio unde
                  obcaecati dignissimos. Totam obcaecati, ratione enim
                  consequuntur nam eos quod error laudantium ex delectus ipsa,
                  ipsum, fugiat saepe ab? Vitae ut molestias neque maiores
                  tempore, doloremque ratione voluptas eveniet veniam libero
                  nobis repellendus non dolores totam autem quaerat possimus
                  deserunt placeat eum incidunt aperiam. Dignissimos dolorem
                  incidunt quos in eum aliquid, vel exercitationem.
                </p>
              </div>

              <button className="but w-fit bg-gray-50 text-gray-900 text-[20px] hover:bg-gray-300 hover:text-gray-900 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
          {/* --------------------------------------------------------------------------- */}
          {/* --------------------------------------------------------------------------- */}
        </section>
        {/* --------------------------------------------------------------------------- */}
        {/* Page 02 */}
        {/* --------------------------------------------------------------------------- */}
        <section className=" box-border flex flex-col py-[10vh] gap-25">
          {/* --------------------------------------------------------------------------- */}
          <div className="flex flex-col justify-center h-full gap-30">
            <h2>Header</h2>
            <div className="flex h-full gap-5">
              <div className="flex flex-1 gap-5">
                <div className="flex flex-1 h-[35vh] bg-gray-300 border-2 border-gray-500 rounded-md"></div>
                <div className="flex flex-1 h-[35vh] bg-gray-300 border-2 border-gray-500 rounded-md"></div>
              </div>
              {/* --------------------------------------------------------------------------- */}
              <div className="flex flex-col flex-1 justify-between">
                <div className="flex flex-col gap-5">
                  <h3>Header</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur earum quas labore placeat odio nam explicabo sit
                    natus beatae maiores! Sint explicabo soluta fugiat maxime
                    temporibus numquam recusandae consectetur dolore
                    exercitationem quos veritatis reiciendis quae consequuntur
                    error qui, quidem optio illo obcaecati eius quas distinctio.
                    Beatae nostrum quidem amet maxime.
                  </p>
                </div>
                <button className="capitalize font-medium w-60 py-3 flex justify-start  bg-none text-gray-900 text-[20px] border-b-2 border-gray-900 hover:text-gray-500 hover:border-b-2 hover:border-gray-500 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
            {/* --------------------------------------------------------------- */}
            <div className="flex h-full gap-5">
              <div className="flex flex-col flex-1 justify-between items-end">
                <div className="flex flex-col gap-5 items-end">
                  <h3>Header</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur earum quas labore placeat odio nam explicabo sit
                    natus beatae maiores! Sint explicabo soluta fugiat maxime
                    temporibus numquam recusandae consectetur dolore
                    exercitationem quos veritatis reiciendis quae consequuntur
                    error qui, quidem optio illo obcaecati eius quas distinctio.
                    Beatae nostrum quidem amet maxime.
                  </p>
                </div>

                <button className="capitalize font-medium w-60 py-3 flex justify-start  bg-none text-gray-900 text-[20px] border-b-2 border-gray-900 hover:text-gray-500 hover:border-b-2 hover:border-gray-500 transition-all duration-300">
                  Learn More
                </button>
              </div>
              <div className="flex flex-1 gap-5">
                <div className="flex flex-1 h-[35vh] bg-gray-300 border-2 border-gray-500 rounded-md"></div>
                <div className="flex flex-1 h-[35vh] bg-gray-300 border-2 border-gray-500 rounded-md"></div>
              </div>
            </div>
            <button className="but mx-auto w-fit bg-gray-900 text-gray-50 text-[20px] hover:bg-gray-300 hover:text-gray-900 transition-colors duration-300">
              Learn More
            </button>
          </div>
          {/* ------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------ */}
        </section>
        {/* --------------------------------------------------------------------------- */}
        {/* Page 03 */}
        {/* --------------------------------------------------------------------------- */}
        <section className="flex py-[10vh] gap-5">
          <div className="flex w-[60vw] flex-col h-[50vh] gap-10 py-15 ">
            <h2>What is this about?</h2>
            <div className="flex flex-col gap-5 w-[90%]">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                doloremque quasi doloribus nam atque suscipit et quod vero
                aliquam. Aut adipisci culpa dolorum laboriosam necessitatibus
                quis rerum accusantium maiores veritatis quisquam commodi quae
                mollitia, voluptatum, quidem ipsa unde nostrum consectetur, sed
                aliquam dolor labore exercitationem! Totam veniam, laborum iusto
                qui ab fuga voluptates, sequi nesciunt, vero nostrum id tempora
                commodi.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
                impedit ipsam, repellat possimus minus aliquid fugit eius
                exercitationem voluptatem? Vel inventore laudantium perspiciatis
                aperiam minus eveniet fugiat aspernatur nam accusantium quidem,
                esse omnis numquam vitae hic quae sit eius mollitia quas,
                dolorum facere commodi et quibusdam, eos molestias. Omnis
                numquam culpa cumque. Pariatur, velit autem.
              </p>
            </div>
          </div>
          <div className="flex w-[40vw] flex-col h-[50vh] bg-gray-600"></div>
        </section>
      </main>
      <footer className="flex flex-col py-5 px-[5vw] border-t border-gray-300">
        <div className="flex"></div>
        <div className="flex gap-1">
          ©2025 <span className="font-bold">oachristhedev</span>, All Rights
          Reserved
        </div>
      </footer>
    </>
  );
}
