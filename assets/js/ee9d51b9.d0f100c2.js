"use strict";(self.webpackChunkharvesterhci_io=self.webpackChunkharvesterhci_io||[]).push([[9762],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=s(n),h=r,m=g["".concat(c,".").concat(h)]||g[h]||p[h]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6854:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"Package your own Toolbox Image",description:"How to package your own toolbox image",slug:"package_your_own_toolbox_image",authors:[{name:"Vicente Cheng",title:"Senior Software Engineer",url:"https://github.com/Vicente-Cheng",image_url:"https://github.com/Vicente-Cheng.png"}],tags:["debug","harvester","container"],hide_table_of_contents:!1},c=void 0,s={permalink:"/kb/package_your_own_toolbox_image",editUrl:"https://github.com/harvester/harvesterhci.io/edit/main/kb/2023-07-06/package_your_own_toolbox_image.md",source:"@site/kb/2023-07-06/package_your_own_toolbox_image.md",title:"Package your own Toolbox Image",description:"How to package your own toolbox image",date:"2023-07-06T00:00:00.000Z",formattedDate:"July 6, 2023",tags:[{label:"debug",permalink:"/kb/tags/debug"},{label:"harvester",permalink:"/kb/tags/harvester"},{label:"container",permalink:"/kb/tags/container"}],readingTime:1.655,truncated:!1,authors:[{name:"Vicente Cheng",title:"Senior Software Engineer",url:"https://github.com/Vicente-Cheng",image_url:"https://github.com/Vicente-Cheng.png",imageURL:"https://github.com/Vicente-Cheng.png"}],frontMatter:{title:"Package your own Toolbox Image",description:"How to package your own toolbox image",slug:"package_your_own_toolbox_image",authors:[{name:"Vicente Cheng",title:"Senior Software Engineer",url:"https://github.com/Vicente-Cheng",image_url:"https://github.com/Vicente-Cheng.png",imageURL:"https://github.com/Vicente-Cheng.png"}],tags:["debug","harvester","container"],hide_table_of_contents:!1},prevItem:{title:"Configure PriorityClass on Longhorn System Components",permalink:"/kb/configure_priority_class_longhorn"},nextItem:{title:"Scan and Repair Root Filesystem of VirtualMachine",permalink:"/kb/scan-and-repair-vm-root-filesystem"}},u={authorsImageUrls:[void 0]},p=[{value:"Create a Dockerfile",id:"create-a-dockerfile",level:2},{value:"Build the image and push",id:"build-the-image-and-push",level:2},{value:"Run the toolbox",id:"run-the-toolbox",level:2}],g={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Harvester OS is designed as an immutable operating system, which means you cannot directly install additional packages on it. While there is a way to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/dev/troubleshooting/os#how-can-i-install-packages-why-are-some-paths-read-only"},"install packages"),", it is strongly advised against doing so, as it may lead to system instability."),(0,a.kt)("p",null,"If you only want to debug with the system, the preferred way is to package the toolbox image with all the needed packages. "),(0,a.kt)("p",null,"This article shares how to package your toolbox image and how to install any packages on the toolbox image that help you debug the system."),(0,a.kt)("p",null,"For example, if you want to analyze a storage performance issue, you can install ",(0,a.kt)("inlineCode",{parentName:"p"},"blktrace")," on the toolbox image."),(0,a.kt)("h2",{id:"create-a-dockerfile"},"Create a Dockerfile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"FROM opensuse/leap:15.4\n\n# Install blktrace\nRUN zypper in -y \\\n    blktrace\n\nRUN zypper clean --all\n")),(0,a.kt)("h2",{id:"build-the-image-and-push"},"Build the image and push"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# assume you are in the directory of Dockerfile\n$ docker build -t harvester/toolbox:dev .\n.\n.\n.\nnaming to docker.io/harvester/toolbox:dev ...\n$ docker push harvester/toolbox:dev\n.\n.\nd4b76d0683d4: Pushed \na605baa225e2: Pushed \n9e9058bdf63c: Layer already exists \n")),(0,a.kt)("p",null,"After you build and push the image, you can run the toolbox using this image to trace storage performance."),(0,a.kt)("h2",{id:"run-the-toolbox"},"Run the toolbox"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# use `privileged` flag only when you needed. blktrace need debugfs, so I add extra mountpoint.\ndocker run -it --privileged -v /sys/kernel/debug/:/sys/kernel/debug/ --rm harvester/toolbox:dev bash\n\n# test blktrace\n6ffa8eda3aaf:/ $ blktrace -d /dev/nvme0n1 -o - | blkparse -i -\n259,0   10     3414     0.020814875 34084  Q  WS 2414127984 + 8 [fio]\n259,0   10     3415     0.020815190 34084  G  WS 2414127984 + 8 [fio]\n259,0   10     3416     0.020815989 34084  C  WS 3206896544 + 8 [0]\n259,0   10     3417     0.020816652 34084  C  WS 2140319184 + 8 [0]\n259,0   10     3418     0.020817992 34084  P   N [fio]\n259,0   10     3419     0.020818227 34084  U   N [fio] 1\n259,0   10     3420     0.020818437 34084  D  WS 2414127984 + 8 [fio]\n259,0   10     3421     0.020821826 34084  Q  WS 1743934904 + 8 [fio]\n259,0   10     3422     0.020822150 34084  G  WS 1743934904 + 8 [fio]\n\n")))}h.isMDXComponent=!0}}]);