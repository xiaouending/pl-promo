const ua=window.navigator.userAgent,isIE=/MSIE|Trident/.test(ua);if(isIE);else{new window.LazyLoad({threshold:0})}const openBtn=document.getElementById("open-menu"),closeBtn=document.getElementById("close-menu"),navigation=document.getElementById("navigation"),body=document.body,html=document.documentElement,navigationLinks=navigation.querySelectorAll("a");let isMobile=window.innerWidth<1024;const toggleOverflow=()=>{html.classList.contains("overflow-hidden")?(html.classList.remove("overflow-hidden"),body.classList.remove("overflow-hidden")):(html.classList.add("overflow-hidden"),body.classList.add("overflow-hidden"))},toggleMenu=()=>{if(isMobile)return navigation.classList.contains("hidden")?navigation.classList.remove("hidden"):navigation.classList.add("hidden"),toggleOverflow()};window.addEventListener("resize",(()=>isMobile=window.innerWidth<=1024)),openBtn.addEventListener("click",toggleMenu),closeBtn.addEventListener("click",toggleMenu),navigationLinks.forEach((e=>e.addEventListener("click",toggleMenu)));const prizes=document.getElementById("prizes"),buttons=prizes.querySelectorAll('[data-id="prize-button"]'),toggleShowDetails=e=>{const d=[...e.childNodes].find((e=>"info"===e.dataset?.contentId)),o=[...e.childNodes].find((e=>"details"===e.dataset?.contentId));d.classList.contains("hidden")?(d.classList.remove("hidden"),o.classList.add("hidden")):(d.classList.add("hidden"),o.classList.remove("hidden"))};buttons.forEach((e=>e.addEventListener("click",(()=>toggleShowDetails(e)))));const openVideoModalBtn=document.getElementById("open-video-modal"),closeVideoModalBtn=document.getElementById("close-video-modal"),videoModal=document.getElementById("video-modal"),videoSrc="./howto.mp4",toggleVideoModal=e=>{e.preventDefault();const d=document.getElementById("video");return videoModal.classList.contains("hidden")?(videoModal.classList.remove("hidden"),d.src=videoSrc):(videoModal.classList.add("hidden"),d.src=""),toggleOverflow()};openVideoModalBtn.addEventListener("click",toggleVideoModal),closeVideoModalBtn.addEventListener("click",toggleVideoModal);