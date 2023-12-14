import Head from "next/head";
import Image from "next/image";


export default function price (){
  return(
    <>
    <Head>
      <title>price</title>
    </Head>

    <main className="p-2">
      <div className="flex flex-col justify-center items-center mt-9">
        <h4 className="font-bold">Pricing</h4>
        <p> Choose a plan that suits your needs and embark on a<br/> journey of seamless, efficient solutions tailored just for you.</p>

        <div  className="flex flex-row mt-4 gap-4">
          <button className="bg-gray-200 rounded-lg px-4" >Monthly</button>
          <p>year</p>
          <p>save up to 25%</p>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-4 justify-center items-center mt-11 gap-2">
        <div className="border rounded-lg p-3">
          <div className="flex flex-row">
            <Image width={10} height={10} src='/star.png'/>
            <Image width={10} height={10} src='/star.png'/>
          </div>
          <h3 className="font-bold pt-3">WELLAPARTNER BASIC</h3>
           
            <p className="pt-4"><span className="font-bold text-2xl">#1000/</span> <span className="text-gray-300">month</span></p>
            <p className="text-sm">Billed monthly</p>

            <p className="pt-4 text-xs">What's included:</p>

            <div className="flex flew-row pt-3 gap-1 text-xs">
              <Image width={15} height={15} src='/mark.png'/>
              <p>Hmo Drug Refills</p>
            </div>
            <div className="flex flew-row pt-3 gap-1 text-xs">
              <Image width={15} height={15} src='/mark.png'/>
              <p>Handle Malaria Claims</p>
            </div>
            <div className="flex flew-row pt-3 gap-1 text-xs">
              <Image width={15} height={15} src='/mark.png'/>
              <p>Wellapartner App Access</p>
            </div>
            <div className="flex flew-row pt-3 gap-1 text-xs">
              <Image width={15} height={15} src='/mark.png'/>
              <p>Patient Records Tracking</p>
            </div>
            <div className="flex flew-row pt-3 gap-1 text-xs">
              <Image width={15} height={15} src='/mark.png'/>
              <p>Business Support/Staff Training</p>
            </div>
            <div className="flex flew-row pt-3 gap-1 text-xs">
              <Image width={15} height={15} src='/mark.png'/>
              <p>Pharmacy listing on Wella Platform</p>
            </div>
            <div className="flex flew-row pt-3 gap-1 text-xs">
              <Image width={15} height={15} src='/mark.png'/>
              <p>Drugs Pickups for Telemedicine</p>
            </div>
            <div className="flex flew-row pt-3 gap-1 text-xs">
              <Image width={15} height={15} src='/mark.png'/>
              <p>Patient access to telemedicine</p>
            </div>

            <button className="mt-5 w-full py-3 bg-green-500 rounded-lg">Get Wellapartner Lite</button>
          
        </div>

        <div className="border rounded-lg p-3">
          <div className="flex flex-row">
            <Image width={10} height={10} src='/star.png'/>
            <Image width={10} height={10} src='/star.png'/>
            <Image width={10} height={10} src='/star.png'/>
          </div>
          <h3 className="font-bold pt-3">WELLAPARTNER STANDARD</h3>
           
            <p className="pt-4"><span className="font-bold text-2xl">#2500/</span><span className="text-gray-300">month</span></p>
            <p className="text-sm">Billed monthly</p>

            <p className="pt-4 text-xs">Everything on Lite, plus:</p>

            <div className="flex flew-row pt-3 gap-1 text-xs">
              <Image width={15} height={15} src='/mark.png'/>
              <p>Drug pickups for telemedicine</p>
            </div>
            
            <div className="flex flex-auto h-auto">
            <button className="w-full py-3 bg-green-500 rounded-lg ">Get Wella-Engage</button>
            </div>
          
        </div>


        <div className="border rounded-lg p-3 bg-black ">
          <div className="flex flex-row">
            <Image className="text-white"  width={10} height={10} src='/star.png'/>
            <Image className="text-white" width={10} height={10} src='/star.png'/>
            <Image className="text-white" width={10} height={10} src='/star.png'/>
            <Image  className="text-white"width={10} height={10} src='/star.png'/>

            <button className="rounded-lg bg-white text-xs px-2 mx-auto">Most popular</button>
          </div>
          <h3 className="font-bold text-white pt-3">WELLAPARTNER BASIC</h3>
           
            <p className="pt-4 text-white"><span className="font-bold text-2xl text-white">#7000/</span><span className="text-gray-300">month</span></p>
            <p className="text-sm text-white">Billed monthly</p>

            <p className="pt-4 text-xs">Everything on Basic,plus:</p>

            <div className="flex flew-row pt-3 gap-1 text-xs text-white">
              <Image width={15} height={15} src='/mark.png'/>
              <p>Patient Management Portal</p>
            </div>
            <div className="flex flew-row pt-3 gap-1 text-xs text-white">
              <Image className="text-white" width={15} height={15} src='/mark.png'/>
              <p>Bulk SMS</p>
            </div>
            <div className="flex flew-row pt-3 gap-1 text-xs text-white">
              <Image width={15} height={15} src='/mark.png'/>
              <p>Automated Patient Follow Up</p>
            </div>
            <div className="flex flew-row pt-3 gap-1 text-xs text-white">
              <Image width={15} height={15} src='/mark.png'/>
              <p>Chronic Disease Management Dashboard</p>
            </div>
            
              

            <button className="mt-5 w-full py-3 bg-green-500 rounded-lg">Get Wellapartner Plus</button>
          
        </div>



        <div className="border rounded-lg p-3">
          <div className="flex flex-row">
            <Image width={10} height={10} src='/star.png'/>
            <Image width={10} height={10} src='/star.png'/>
            <Image width={10} height={10} src='/star.png'/>
            <Image width={10} height={10} src='/star.png'/>
            <Image width={10} height={10} src='/star.png'/>
          </div>
          <h3 className="font-bold pt-3">WELLAPARTNER PREMIUM</h3>
           
            <p className="pt-4"><span className="font-bold text-2xl">#7000/</span><span className="text-gray-300">month</span></p>
            <p className="text-sm">Billed monthly</p>

            <p className="pt-4 text-xs">Everything on Engage,plus:</p>

            <div className="flex flew-row pt-3 gap-1 text-xs">
              <Image width={15} height={15} src='/mark.png'/>
              <p>Medication Group Purchase</p>
            </div>
            <div className="flex flew-row pt-3 gap-1 text-xs">
              <Image width={15} height={15} src='/mark.png'/>
              <p>inventory Insights</p>
            </div>
            <div className="flex flew-row pt-3 gap-1 text-xs">
              <Image width={15} height={15} src='/mark.png'/>
              <p>Marketing Support</p>
            </div>
            
              

            <button className="mt-5 w-full py-3 bg-green-500 rounded-lg">Get Wellapartner Lite</button>
          
        </div>
      </section>

      <div className="flex flex-col justify-center items-center mt-6">
        <h4 className="font-bold">Compare Plans & features </h4>
        <p className="text-sm">Overview of what's included in our different plans</p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-5 justify-center items-center mt-11 gap-2">

           
        <div className="border rounded-lg p-3 mt-32">
          <div>
          <p className="pt-11 text-xs">HMO Drug Refills</p>
          <p className="pt-4 text-xs">Handle Malaria Claims</p>
          <p className="pt-4 text-xs">Wellapartner App Access</p>
          <p className="pt-4 text-xs">Drug Pick Ups for Telemedicne</p>
          <p className="pt-4 text-xs">Patient Records Tracking</p>
          <p className="pt-4 text-xs">Business Support/Staff Training</p>
          <p className="pt-4 text-xs">Pharmacy listing on Wella Platform</p>
          <p className="pt-4 text-xs">patient access to <br/>telemedicine services</p>
          <p className="pt-4 text-xs">Bulk SMS</p>
          <p className="pt-4 text-xs">Automated Patient Follow up</p>
          <p className="pt-4 text-xs">Chronic Disease Managemnet <br/>Dashboard</p>
          <p className="pt-4 text-xs">Medication Group Purchase</p>
          <p className="pt-4 text-xs">Inventory Insights</p>
          <p className="pt-4 text-xs">Marketing Support</p>
          </div>
        </div>

        <div className="border rounded-lg p-3">
          <p className="font-bold text-xs justify-center items-center">Wellapartner<br/>Standard</p>

          <p className="pt-4"><span className="font-bold text-xs">#1000/</span><span className="text-gray-300">month</span></p>
          <button className="mt-4 w-full py-1 bg-gray-400 text-white text-sm rounded-lg">Get Started</button>
        </div>

        <div className="bg-dark-300 border rounded-lg p-3">
            <p className="font-bold text-xs justify-center items-center">Wellapartner<br/>Business</p>

              <p className="pt-4"><span className="font-bold text-xs">#2500/</span><span className="text-gray-300">month</span></p>
              <button className="mt-4 w-full py-1 bg-gray-400 text-white text-sm rounded-lg">Get Started</button>

        </div>

        <div className="border rounded-lg p-3 bg-slate-600">
        <p className="font-bold text-xs justify-center items-center">Wellapartner<br/>Premium</p>

          <p className="pt-4"><span className="font-bold text-xs">#5000/</span><span className="text-gray-300">month</span></p>
          <button className="mt-4 w-full py-1 bg-green-500 text-white text-sm rounded-lg">Get Started</button>
          <Image className="text-white pt-5" width={15} height={15} src='/mark.png'/>


        </div>

        <div className="border rounded-lg p-3">
        <p className="font-bold text-xs justify-center items-center">Wellapartner<br/>Basic</p>

            <p className="pt-4"><span className="font-bold text-xs">#7500/</span><span className="text-gray-300">month</span></p>
            <button className="mt-4 w-full py-1 bg-gray-400 text-white text-sm rounded-lg">Get Started</button>

            <div className="flex flex-row justify-center items-center">
            <Image className="text-white  pt-5" width={15} height={15} src='/mark.png'/>
            </div>
        </div>

      </section>
    </main>
    
    
    
    </>
  )
} 