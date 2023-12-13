import Head from "next/head";
import Image from "next/image";


export default function price (){
  return(
    <>
    <Head>
      <title>price</title>
    </Head>

    <main>
      <div className="flex flex-col justify-center items-center mt-9">
        <h4 className="font-bold">Pricing</h4>
        <p> Choose a plan that suits your needs and embark on a<br/> journey of seamless, efficient solutions tailored just for you.</p>

        <div  className="flex flex-row mt-4 gap-4">
          <button className="bg-gray-200 rounded-lg px-4" >Monthly</button>
          <p>year</p>
          <p>save up to 25%</p>
        </div>
      </div>

      <section className="flex flex-row justify-center items-center mt-11 gap-3">
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
          </div>
          <h3 className="font-bold pt-3">WELLAPARTNER BASIC</h3>
           
            <p className="pt-4"><span className="font-bold text-2xl">#1000/</span><span className="text-gray-300">month</span></p>
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
          </div>
          <h3 className="font-bold pt-3">WELLAPARTNER BASIC</h3>
           
            <p className="pt-4"><span className="font-bold text-2xl">#1000/</span><span className="text-gray-300">month</span></p>
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
          </div>
          <h3 className="font-bold pt-3">WELLAPARTNER BASIC</h3>
           
            <p className="pt-4"><span className="font-bold text-2xl">#1000/</span><span className="text-gray-300">month</span></p>
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
      </section>
    </main>
    
    
    
    </>
  )
} 