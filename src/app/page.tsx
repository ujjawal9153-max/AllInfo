import { Heading } from "./components/heading"
import { Maxwidthwrapper } from "./components/maxwidthwrapper"

const Page =()=>{
  return (
  <>
 <section className=" relative py-24 sm:py-32 bg-brand-25">
 <Maxwidthwrapper className="text-center">
    <div className="relative mx-auto text-center flex flex-col items-center gap-10">
      <div>
        <Heading>
       
        <span>Real-Time SaaS Insights,</span>
                <br />
                <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text">
                  Delivered to Your Discord
                </span>
        </Heading>
      </div>
      <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">
              AllInfo is the easiest way to monitor your SaaS Prodict . Get instant
              notifications for{" "}
              <span className="font-semibold text-gray-700">
                sales, new users, financial update or any other event
              </span>{" "}
              sent directly to your Discord.
            </p>
    </div>
    
  </Maxwidthwrapper>
 </section>
 <section></section> 
 <section></section>
 <section></section>
  </>
  )
}
export default Page 