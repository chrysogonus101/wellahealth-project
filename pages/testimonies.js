import Head from 'next/head'
import Image from 'next/image';


export default function testimonies () {
  return(
    <>
    <Head>
      <title>testimonies</title>
    </Head>
    <main>

      <section className='flex flex-col justify-center items-center mt-9'>
         <button className='bg-purple-200 rounded-md px-2'>Customer Stories</button>
         <h4 className='font-bold text-2xl pt-3'>Our Wall of love</h4>
         <p className='pt-3'>Read what our community members are saying about us</p>

         <Image className='mt-8 pb-7' width={800} height={120} src='/component.png'/>
      </section>

      <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-cent space-y-3 pt-4'>
        <div className='justify-center items-center'>

            <div className=' bg-slate-200 justify-center items-center'>
            <p>“I've been using the wellapartner services<br/> provided by wellapartner for over a year<br/> now, and I can confidently say that it has<br/> transformed the way I conduct transactions online”</p>
            <h6 className='pt-3 font-bold'>Mike</h6>
            <p>Lagos,Nigeria.</p>
            </div>
            

            <div className=' bg-slate-200 mt-2'>
            <p>I've been using the escrow services<br/> provided by MiddleMan for over a year now,<br/> and I can confidently </p>
            <h6 className='pt-3 font-bold'>Victor</h6>
            <p>Lagos,Nigeria.</p>
            </div>

            <div className=' bg-slate-200 mt-2'>
            <p>I've been using the escrow services<br/> provided by MiddleMan for over a year now,<br/> and I can confidently </p>
            <h6 className='pt-3 font-bold'>Victor</h6>
            <p>Lagos,Nigeria.</p>
            </div>

            <div className=' bg-slate-200 mt-2'>
            <p>I've been using the escrow services<br/> provided by MiddleMan for over a year now,<br/> and I can confidently </p>
            <h6 className='pt-3 font-bold'>Victor</h6>
            <p>Lagos,Nigeria.</p>
            </div>
          </div>

          
        <div className='justify-center items-center'>

            <div className=' bg-slate-200 justify-center items-center'>
            <p>“I've been using the wellapartner services<br/> provided by wellapartner for over a year<br/> now, and I can confidently say that it has<br/> transformed the way I conduct transactions online”</p>
            <h6 className='pt-3 font-bold'>Mike</h6>
            <p>Lagos,Nigeria.</p>
            </div>
            

            <div className=' bg-slate-200 mt-2'>
            <p>I've been using the escrow services<br/> provided by MiddleMan for over a year now,<br/> and I can confidently </p>
            <h6 className='pt-3 font-bold'>Victor</h6>
            <p>Lagos,Nigeria.</p>
            </div>

            <div className=' bg-slate-200 mt-2'>
            <p>I've been using the escrow services<br/> provided by MiddleMan for over a year now,<br/> and I can confidently </p>
            <h6 className='pt-3 font-bold'>Victor</h6>
            <p>Lagos,Nigeria.</p>
            </div>

            <div className=' bg-slate-200 mt-2'>
            <p>I've been using the escrow services<br/> provided by MiddleMan for over a year now,<br/> and I can confidently </p>
            <h6 className='pt-3 font-bold'>Victor</h6>
            <p>Lagos,Nigeria.</p>
            </div>
          </div>



        

      </div>

    </main>

    </>
  )
}