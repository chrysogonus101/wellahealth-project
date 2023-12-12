import Head from 'next/head'
import Image from 'next/image';
import { Nunito } from 'next/font/google';
import { GoArrowRight } from "react-icons/go";



const nunito = Nunito({
  subsets:['latin'],
  weight:'700'
});




export default function index () {
  return (
  <>
    <Head>
      <title>Landing page</title>
    </Head>

    <main>

      <section1 className='flex flex-col justify-center items-center mt-9'>
          <h1 className='text-4xl pt-9 '>10X your pharmacy revenue with</h1>
          <h2 className='text-green-600 text-4xl'>Wellapartner</h2>
          <p className='pt-4'>Simplify your pharmacy business and streamline your workflow</p> 
          <p> and enhance patient care with wellapartner</p>

          <button className='bg-green-400 px-6 py-1 mt-6 rounded-md h-[48px] flex justify-center items-center gap-2'>Get Started <GoArrowRight className='mr-2'/></button>
      </section1>

      <div className='bg-red-50 flex flex-col justify-center items-center mt-9'>
      <Image 
                width={600} 
                height={120} 
                className="rounded-t-md"
                src='/wella-partner.jpg' alt="partner"/>

      </div>

      <section className='flex flex-col justify-center items-center mt-9'>
        <h4 className='text-2xl'>We are trusted by over 2000 pharmacies</h4>
        <p>This is a tastament of our reliability and unmatched</p>
        <p>service in the pharmaceutical industry</p>
      </section>

      <div className='flex flex-col justify-center items-center mt-9'>
        <Image height={500} width={700} src='/crop.png'/>

      </div>

      <div className='flex flex-col justify-center items-center mt-9'>
        <h3 className='mt-3 text-2xl'>About WellaPartner</h3>

        <Image className='mt-8' width={600} height={120} src='/component.png'/>

      </div>

      <div className='bg-green-100 flex flex-col justify-center items-center mt-9'>
        <h4 className='font-bold text-3xl pt-7'>Boost your revenue</h4>
        <p className='text-2xl'>with Wellapartner</p>
        <Image className='mt-2' width={600} height={120} src='/wellapartner2.png'/>
        <p>With our innovative solutions and strategic</p>
        <p>expertise, we empower businesses like ours</p>
        <p>to reach new heights of success</p>

        <button className='bg-green-400 px-6 py-1 mt-6 rounded-md h-[48px] flex justify-center items-center gap-2'>Get Started <GoArrowRight className='mr-2'/></button>
      

          <div className='flex flex-col-3 justify-center items-center gap-9 mt-9 pb-7'>
            <div>
              <div className='flex flex-row gap-1'>
                <Image width={20} height={20} src='/prescription.png'/>
                <h5 className='font-bold'>HMO DRUGS REFILLS</h5>
              </div>
              <p>Supply enrollees of over 25 <br/> HMOs in Nigeria</p>

            </div>

            <div>
              <div className='flex flex-row gap-1'>
              <Image width={20} height={20} src='/Basket.png'/>
                <h5 className='font-bold'>TELEMEDICINE DRUG PICKUPS</h5>
              </div>
              <p>List your pharmacy as a medication pick up<br/> point for telemedicine services</p>

            </div>

            <div>
              <div className='flex flex-row gap-1'>
              <Image width={20} height={20} src='/Clippathgroup.png'/>
                <h5 className='font-bold'>HANDLE MALARIA CLAIMS</h5>
              </div>
              <p>Get paid for medications and tests<br/>provided</p>

            </div>
            </div>
            </div>

            <section className='flex flex-col justify-center items-center mt-9'>
              <p className='text-3xl'>Better Patient</p>
              <p className=' text-2xl font-bold'>Management & Care</p>
              <Image height={500} width={400} src='/fram1.png'/>

              <p>Our plateformhas redefined the way you <br/>interact  with patients, ensuring a seamless, <br/> personalized, and efficinet experience</p>

              <button className='bg-green-400 px-6 py-1 mt-6 rounded-md h-[48px] flex justify-center items-center gap-2'>Get Started <GoArrowRight className='mr-2'/></button>

            </section>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5 pl-9 justify-center items-center'>
            <div>
              <div className='flex flex-row gap-1'>
              <Image width={20} height={20} src='/GooglePlayLogo.png'/>
                <h5 className='font-bold'>WELLAPARTNER APP ACCESS</h5>
              </div>
              <p>Get access to wellapartner app & enjoy <br/>smooth fulfilment & payment flow for <br/>wellahealth request</p>

            </div>

            <div>
              <div className='flex flex-row gap-1'>
                <Image width={20} height={20} src='/ClipboardText.png'/>
                <h5 className='font-bold'>PATIENT RECORDS TRACKING</h5>
                </div>
              <p>Keep track of data for your walk-in patients and leverage that for better and effective patient  engagement.</p>

            </div>
            <div>
              <div className='flex flex-row gap-1'>
              <Image width={20} height={20} src='/Airplay.png'/>
                <h5 className='font-bold'>CHRONICARE DASHBOARD </h5>
              </div>
              <p>Monitor your chronic disease patients  
                effectively with our easy to use patient dashboard and improve care outcomes</p>

            </div>
            <div >
              <div className='flex flex-row gap-1'>
              <Image width={20} height={20} src='/MaskHappy.png'/>
                <h5 className='font-bold'>AUTOMATED PATIENT FOLLOW UP</h5>
              </div>
              <p>Automate your patient follow up process and boost customer satisfaction and retention</p>

            </div>
            <div>
              <div className='flex flex-row gap-1'>
              <Image width={20} height={20} src='/ChatCircleText.png'/>
                <h5 className='font-bold'>BULK SMS</h5>
              </div>
              <p>Engage your pool of clients with discounts, freebies and new product information using via sms</p>

            </div>
            <div>
              <div className='flex flex-row gap-1'>
              <Image width={20} height={20} src='/Clippath.png'/>
                <h5 className='font-bold'>PATIENT ACCESS TO TELEMEDICINE</h5>
              </div>
              <p>Give your clients access to telemedicine services right from your pharmacy premise and improve client satisfaction</p>

            </div>

            </div>

    </main>
  </>
  )
}
