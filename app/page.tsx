

export default function Home() {
  return (
    <div className="container mx-auto px-16">
      <h1 className="text-5xl  font-bold pb-11 pt-5 text-center">zoterocss笔记主题</h1>
      <h2 className="text-3xl font-semibold pb-1 pt-5 text-left">笔记使用说明</h2>
      <a href="https://wk8686.top/zoteroepi93/" className="block text-xl underline decoration-dashed">笔记使用教程</a>
      <a href="https://wk8686.top/ " className="block text-xl underline decoration-dashed">返回博客</a>
      <h2 className="text-3xl font-semibold pb-1 pt-5 text-left mb-10">主题展示</h2>

      <div className="grid gap-y-20 grid-cols-2 border-black gap-x-16">
        <div className="grid grid-cols-2 bg-white p-4 rounded-3xl shadow-md border-grey border-2 h-auto">
          <div className="mt-10 grid grid-cols-1 gap-y-5  justify-items-center">
            <p>zotero笔记主题CSS-多彩版</p>
            <p>作者:Wang</p>
            <div><button className="cursor-pointer group size-fit relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px" width="24px"><g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                <g id="SVGRepo_iconCarrier">
                  <g id="Interface / Download">
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#f1f1f1" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" id="Vector">
                    </path>
                  </g>
                </g>
              </svg>
              Download
              <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
                点我下载
              </div>
            </button>
            <p className="text-xs text-center">downloaded: 120次</p>
            </div>
          </div>
          <div className="content-center"><img src="https://raw.githubusercontent.com/KangWang42/98-pic_used/main/01%20pic_go/202410150913100.png" alt="" /></div>
        </div>
        <div className="grid grid-cols-2 bg-white p-4 rounded-lg shadow-md border-grey border-2 h-auto">Card 3</div>
        <div className="card bg-white p-4 rounded-lg shadow-md border-grey border-2 w-2/3 h-96 justify-self-center">Card 4</div>
        <div className="card bg-white p-4 rounded-lg shadow-md border-grey border-2 w-2/3 h-96 justify-self-center">Card 5</div>
        <div className="card bg-white p-4 rounded-lg shadow-md border-grey border-2 w-2/3 h-96 justify-self-center">Card 6</div>
        <div className="card bg-white p-4 rounded-lg shadow-md border-grey border-2 w-2/3 h-96 justify-self-center">   <p>第一行</p>  <p>第二行</p></div>
        <div className="card bg-white p-4 rounded-lg shadow-md border-grey border-2 w-2/3 h-96 justify-self-center">Card 3</div>
        <div className="card bg-white p-4 rounded-lg shadow-md border-grey border-2 w-2/3 h-96 justify-self-center">Card 4</div>
        <div className="card bg-white p-4 rounded-lg shadow-md border-grey border-2 w-2/3 h-96 justify-self-center">Card 5</div>
        <div className="card bg-white p-4 rounded-lg shadow-md border-grey border-2 w-2/3 h-96 justify-self-center">Card 6</div>
        <div className="card bg-white p-4 rounded-lg shadow-md border-grey border-2 w-2/3 h-96 justify-self-center">   <p>第一行</p>  <p>第二行</p></div>
        <div className="card bg-white p-4 rounded-lg shadow-md border-grey border-2 w-2/3 h-96 justify-self-center">Card 3</div>
        <div className="card bg-white p-4 rounded-lg shadow-md border-grey border-2 w-2/3 h-96 justify-self-center">Card 4</div>
        <div className="card bg-white p-4 rounded-lg shadow-md border-grey border-2 w-2/3 h-96 justify-self-center">Card 5</div>
        <div className="card bg-white p-4 rounded-lg shadow-md border-grey border-2 w-2/3 h-96 justify-self-center">Card 6</div>
        <div className="card bg-white p-4 rounded-lg shadow-md border-grey border-2 w-2/3 h-96 justify-self-center">   <p>第一行</p>  <p>第二行</p></div>
        <div className="card bg-white p-4 rounded-lg shadow-md border-grey border-2 w-2/3 h-96 justify-self-center">Card 3</div>
        <div className="card bg-white p-4 rounded-lg shadow-md border-grey border-2 w-2/3 h-96 justify-self-center">Card 4</div>
        <div className="card bg-white p-4 rounded-lg shadow-md border-grey border-2 w-2/3 h-96 justify-self-center">Card 5</div>
        <div className="card bg-white p-4 rounded-lg shadow-md border-grey border-2 w-2/3 h-96 justify-self-center">Card 6</div>


      </div>
 
    </div>
  );
}
