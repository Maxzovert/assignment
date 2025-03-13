import React from 'react'

const Faqs = () => {
  return (
    <div className="flex flex-col h-auto mt-8 mx-5 sm:mx-10 md:mx-35 mb-15">
      <div className="text-center">
        <h1 className="mt-5 text-2xl font-semibold" style={{color:"#E4875D"}}>Our top-list of commonly asked questions</h1>
        <h1 className="mt-6 font-semibold text-4xl">FAQS</h1>
      </div>
      <div className="mx-20 my-5">
        {["1. How is Media+ beneficial for Marketers?" , 
          "2. How does Media+ improve user retention, engagement & help in generating more leads?",
          "3. How does Media+ result in better brand visibility?",
          "4. How does Media+ simplify video content management?",
          "5. How does Media+ use AI to improve content discovery?",
          "6. What kind of analytics does Media+ provide?",
          "7. Can Media+ integrate with my existing MAP tools like Hubspot?",
          ].map((faq , index)=>(
            <div key={index} className="flex flex-row justify-between my-10 mx-20">
              <div className="text-[20px] text-black m-5" style={{fontWeight:"400"}}>{faq}</div>
              <div className="h-5 w-5 rounded-full text-center border border-slate-300 flex items-center justify-center text-[21px] text-slate-500 pb-1">+</div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Faqs
