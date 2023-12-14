import Head from 'next/head'
import Image from 'next/image';
import { GoArrowRight } from "react-icons/go";



export default function index () {
  return (
  <>
  
    <Head>
      <title>Landing page</title>
    </Head>
    

    <main className='p-3'>
      <Navbar/>

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
      

          <div className='grid grid-rows-1 md:grid-cols-3 justify-center items-center gap-9 mt-9 pb-7'>
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

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 pl-9 justify-center items-center pb-6'>
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

          <section className='flex flex-col justify-center items-center bg-gray-200 mt-7'>
            <p className='text-2xl pt-4'>Continuous Support <span className='font-bold'>for</span></p>
            <p className='text-3xl'>Business development</p>

            <Image className='pt-6' height={800} width={500} src='/Frame2.jpg'/>
            <p className='pt-5'>Whether you are a startup or an established<br/> company, having the right support can make<br/> a significant difference</p>

            <button className='bg-green-400 px-6 py-1 mt-6 rounded-md h-[48px] flex justify-center items-center gap-2'>Get Started <GoArrowRight className='mr-2'/></button>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7 pl-9 justify-center items-center pb-5'>
            <div>
              <div className='flex flex-row gap-1'>
              <Image width={20} height={20} src='/FirstAid.png'/>
                <h5 className='font-bold'>MEDICATION GROUP PURCHASE</h5>
              </div>
              <p>Get financing for medication purchase though our medication bulk purchase arrangement for partner pharmacies. </p>

            </div>

            <div>
              <div className='flex flex-row gap-1'>
                <Image width={20} height={20} src='/Group.png'/>
                <h5 className='font-bold'>BUSINESS SUPPORT & STAFF TRAINING</h5>
                </div>
              <p>Get access to business support materials and opportunites as well as training to boost your staff efficiency</p>

            </div>
            <div>
              <div className='flex flex-row gap-1'>
              <Image width={20} height={20} src='/Clip.png'/>
                <h5 className='font-bold'>MARKETING SUPPORT </h5>
              </div>
              <p>Get support for better community engagement through digital and physical channels</p>
            </div>
            <div >
              <div className='flex flex-row gap-1'>
              <Image width={20} height={20} src='/Books.png'/>
                <h5 className='font-bold'>INVENTORY INSIGHTS</h5>
              </div>
              <p>Leverage pharmacy business data for your business planning from wellahealth's inventory and business database</p>

            </div>
            <div>
              <div className='flex flex-row gap-1'>
              <Image width={20} height={20} src='/AddressBook.png'/>
                <h5 className='font-bold'>LISTING ON WELLAPARTNER PLATFORM</h5>
              </div>
              <p>Gain visibility to the wider health system and access opportunities by being a part of the wellahealth network</p>

            </div>
            <div>
              <div className='flex flex-row gap-1'>
              <Image width={20} height={20} src='/Coins.png'/>
                <h5 className='font-bold'>SECURE BUSINESS LOANS</h5>
              </div>
              <p>Our loans provide the financial foundation you need to expand your services, and enhance your overall pharmacy experience.</p>

             </div>
            </div>
          </section>  

        <div className='flex flex-col justify-center items-center mt-6'>
          <h4 className='font-bold text-2xl'>Frequently Asked Questions?</h4>
          <h5 className='pt-7'>Who owns wellapartner?</h5>
          <p>Wellapartner is run by Wellahealth as one of their core products<br/> Wellapartner is run by Wellahealth as one of their core products</p>

        </div>

        <div>
      <Accordion>
        <AccordionSummary
          
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
  
    </div>
        

    </main>
  </>
  )
}
