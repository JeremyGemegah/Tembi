import { SvgXml } from "react-native-svg"

export  const MailIcon = ({style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
    <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const Profile = ({style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
    <path d="M7.5 17C9.8317 14.5578 14.1432 14.4428 16.5 17M14.4951 9.5C14.4951 10.8807 13.3742 12 11.9915 12C10.6089 12 9.48797 10.8807 9.48797 9.5C9.48797 8.11929 10.6089 7 11.9915 7C13.3742 7 14.4951 8.11929 14.4951 9.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}
export const Lock = ({color,style}) => {
    const mycolor = color || "#000000"
     const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color=${mycolor} fill="none">
    <path d="M13.9928 15L14 15M10 15L10.0072 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5 15C5 11.134 8.13401 8 12 8C15.866 8 19 11.134 19 15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M16.5 9.5V6.5C16.5 4.01472 14.4853 2 12 2C9.51472 2 7.5 4.01472 7.5 6.5V9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
        
    )
}
export const EyeOpen = ({style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" stroke="currentColor" stroke-width="1.5" />
</svg>`
    return(
        <SvgXml xml={xml} style={style} /> 
    )
}
export const EyeClosed = ({style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M22 8C22 8 18 14 12 14C6 14 2 8 2 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M15 13.5L16.5 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M20 11L22 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M2 13L4 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M9 13.5L7.5 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}


export const GoogleLogo = ({style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M18.14 9.20443C18.14 8.56625 18.0827 7.95262 17.9764 7.36353H9.5V10.8449H14.3436C14.135 11.9699 13.5009 12.9231 12.5477 13.5613V15.8194H15.4564C17.1582 14.2526 18.14 11.9453 18.14 9.20443Z" fill="#4285F4"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 18C11.93 18 13.9673 17.1941 15.4564 15.8195L12.5477 13.5613C11.7418 14.1013 10.7109 14.4204 9.5 14.4204C7.15591 14.4204 5.17182 12.8372 4.46409 10.71H1.45728V13.0418C2.93818 15.9831 5.98182 18 9.5 18Z" fill="#34A853"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46409 10.7101C4.28409 10.1701 4.18182 9.59325 4.18182 9.00007C4.18182 8.40689 4.28409 7.83007 4.46409 7.29007V4.95825H1.45727C0.847727 6.17325 0.5 7.5478 0.5 9.00007C0.5 10.4523 0.847727 11.8269 1.45727 13.0419L4.46409 10.7101Z" fill="#FBBC05"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 3.57955C10.8214 3.57955 12.0077 4.03364 12.9405 4.92545L15.5218 2.34409C13.9632 0.891818 11.9259 0 9.5 0C5.98182 0 2.93818 2.01682 1.45728 4.95818L4.46409 7.29C5.17182 5.16273 7.15591 3.57955 9.5 3.57955Z" fill="#EA4335"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const BackIcon = ({style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
  <path d="M9 1L1.70711 8.29289C1.37377 8.62623 1.20711 8.79289 1.20711 9C1.20711 9.20711 1.37377 9.37377 1.70711 9.70711L9 17" stroke="#2E3748" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}


export const HomeIcon = ({color,fill,highlightColor,style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M1.35139 12.2135C0.998371 9.91624 0.821861 8.76763 1.25617 7.74938C1.69047 6.73112 2.65403 6.03443 4.58114 4.64106L6.02099 3.6C8.41829 1.86667 9.61694 1 11 1C12.3831 1 13.5817 1.86667 15.979 3.6L17.4189 4.64106C19.346 6.03443 20.3095 6.73112 20.7438 7.74938C21.1781 8.76763 21.0016 9.91624 20.6486 12.2135L20.3476 14.1724C19.8471 17.4289 19.5969 19.0572 18.429 20.0286C17.2611 21 15.5537 21 12.1388 21H9.86119C6.44633 21 4.73891 21 3.571 20.0286C2.40309 19.0572 2.15287 17.4289 1.65243 14.1724L1.35139 12.2135Z" stroke=${color} fill=${fill} stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M9 17L13 17" stroke=${highlightColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}


export const RidesIcon = ({color,style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 18" fill="none">
  <circle cx="5" cy="13" r="4" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="17" cy="13" r="4" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5 13L9.37056 13C9.73022 13 10.0622 12.8069 10.2399 12.4942L14.5 5" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11 10L6 4M6 4L4 4M6 4H8" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.0511 1.90623L13.3257 2.09682L13.3267 2.10048L14.0511 1.90623ZM16.3015 13.1943C16.4087 13.5943 16.82 13.8317 17.2201 13.7244C17.6202 13.6171 17.8576 13.2058 17.7503 12.8057L16.3015 13.1943ZM18.2781 3.42627C18.3905 3.82495 18.8048 4.05703 19.2035 3.94464C19.6022 3.83225 19.8343 3.41796 19.7219 3.01928L18.2781 3.42627ZM13.3267 2.10048L16.3015 13.1943L17.7503 12.8057L14.7755 1.71198L13.3267 2.10048ZM14.7947 0.25C14.445 0.25 13.9254 0.302423 13.5679 0.693366C13.1754 1.1227 13.216 1.67949 13.3257 2.09682L14.7765 1.71564C14.7619 1.66009 14.7549 1.61959 14.7519 1.59211C14.7489 1.56455 14.7504 1.5548 14.75 1.55897C14.7495 1.56389 14.7466 1.58437 14.7341 1.61391C14.7279 1.62856 14.7199 1.64431 14.7096 1.6604C14.6993 1.67651 14.6876 1.69169 14.6749 1.70558C14.649 1.73395 14.6239 1.75143 14.6072 1.7609C14.5914 1.76983 14.5851 1.77054 14.5945 1.76789C14.6039 1.7652 14.6245 1.76043 14.6595 1.7565C14.6942 1.7526 14.7388 1.75 14.7947 1.75V0.25ZM19.7219 3.01928C19.3708 1.77396 18.5762 1.05062 17.6224 0.667334C16.7171 0.303499 15.6813 0.25 14.7947 0.25V1.75C15.6584 1.75 16.444 1.81037 17.0631 2.05916C17.6338 2.28849 18.0668 2.67655 18.2781 3.42627L19.7219 3.01928Z" fill=${color}/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}


export const AccountIcon = ({color,style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <circle cx="11" cy="11" r="10" stroke=${color} stroke-width="1.5"/>
  <path d="M6.5 16C8.8317 13.5578 13.1432 13.4428 15.5 16M13.4951 8.5C13.4951 9.88071 12.3742 11 10.9915 11C9.60885 11 8.48797 9.88071 8.48797 8.5C8.48797 7.11929 9.60885 6 10.9915 6C12.3742 6 13.4951 7.11929 13.4951 8.5Z" stroke=${color} stroke-width="1.5" stroke-linecap="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}


export const LocationIcon = ({color,style}) => {
    const mycolor = color || "#002520"
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20.5137 12C20.5137 16.6944 16.7081 20.5 12.0137 20.5C7.31925 20.5 3.51367 16.6944 3.51367 12C3.51367 7.30558 7.31925 3.5 12.0137 3.5C16.7081 3.5 20.5137 7.30558 20.5137 12Z" stroke=${mycolor} stroke-width="1.5"/>
  <path d="M22.5 12H20.5" stroke=${mycolor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.5 12H1.5" stroke=${mycolor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 1.5L12 3.5" stroke=${mycolor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 20.5V22.5" stroke=${mycolor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15 12C15 13.6569 13.6568 15 12 15C10.3431 15 8.99995 13.6569 8.99995 12C8.99995 10.3431 10.3431 9 12 9C13.6568 9 15 10.3431 15 12Z" stroke=${mycolor} stroke-width="1.5"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}


export const QRIcon = ({color,style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
  <path d="M9.49297 1.3335C6.22995 1.4081 4.32405 1.7198 3.02185 3.022C1.71964 4.32421 1.40795 6.2301 1.33334 9.49312M16.5071 1.3335C19.7701 1.4081 21.676 1.7198 22.9782 3.022C24.2804 4.32421 24.5921 6.2301 24.6667 9.49312M16.5071 24.6668C19.7701 24.5922 21.676 24.2805 22.9782 22.9783C24.2804 21.6761 24.5921 19.7702 24.6667 16.5072M9.49297 24.6668C6.22995 24.5922 4.32405 24.2805 3.02185 22.9783C1.71964 21.6761 1.40795 19.7702 1.33334 16.5072" stroke="#002520" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.8331 7.16699H18.8436" stroke="#002520" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.1667 6V9.5C14.1667 11.6999 14.1667 12.7998 13.4832 13.4832C12.7998 14.1667 11.6999 14.1667 9.5 14.1667H6" stroke="#002520" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M6.34171 6.34171C6 6.68342 6 7.23339 6 8.33333C6 9.43328 6 9.98325 6.34171 10.325M6.34171 6.34171C6.68342 6 7.23339 6 8.33333 6C9.43328 6 9.98325 6 10.325 6.34171M6.34171 6.34171C6.34171 6.34171 6.34171 6.34171 6.34171 6.34171ZM6.34171 10.325C6.68342 10.6667 7.23339 10.6667 8.33333 10.6667C9.43328 10.6667 9.98325 10.6667 10.325 10.325M6.34171 10.325C6.34171 10.325 6.34171 10.325 6.34171 10.325ZM10.325 10.325C10.6667 9.98325 10.6667 9.43328 10.6667 8.33333C10.6667 7.23339 10.6667 6.68342 10.325 6.34171M10.325 10.325C10.325 10.325 10.325 10.325 10.325 10.325ZM10.325 6.34171C10.325 6.34171 10.325 6.34171 10.325 6.34171Z" stroke="#002520" stroke-width="1.5"/>
  <path d="M18.8334 16.5C19.3833 16.5 19.6583 16.5 19.8292 16.6709C20 16.8417 20 17.1167 20 17.6667V18.8333C20 19.3833 20 19.6583 19.8292 19.8291C19.6583 20 19.3833 20 18.8334 20H16.5C15.9501 20 15.6751 20 15.5042 19.8291C15.3334 19.6583 15.3334 19.3833 15.3334 18.8333L15.3334 17.6667C15.3334 17.1167 15.3334 16.8417 15.5042 16.6709C15.6751 16.5 15.9501 16.5 16.5 16.5L18.8334 16.5Z" stroke="#002520" stroke-width="1.5"/>
  <path d="M6 20H11.8333" stroke="#002520" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M18.8334 10.667L18.8334 13.0003" stroke="#002520" stroke-width="1.5" stroke-linecap="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}


export const QuestionIcon = ({color,style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <circle cx="11" cy="11" r="10" stroke="#2E3748" stroke-width="1.5"/>
  <path d="M9 8C9 6.89543 9.89543 6 11 6C12.1046 6 13 6.89543 13 8C13 8.39815 12.8837 8.76913 12.6831 9.08079C12.0854 10.0097 11 10.8954 11 12V12.5" stroke="#2E3748" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M10.992 16H11.001" stroke="#2E3748" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}


export const FlashLightIcon = ({color,style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12.0001 12.25C12.4143 12.25 12.7501 12.5858 12.7501 13V15C12.7501 15.4142 12.4143 15.75 12.0001 15.75C11.5858 15.75 11.2501 15.4142 11.2501 15V13C11.2501 12.5858 11.5858 12.25 12.0001 12.25Z" fill="#2E3748"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.95532 1.25C5.5225 1.24995 5.12567 1.24991 4.80286 1.29331C4.44738 1.3411 4.07165 1.45355 3.76263 1.76257C3.45361 2.07159 3.34116 2.44732 3.29337 2.8028C3.24997 3.12561 3.25001 3.52244 3.25006 3.95526L3.25007 4.17158L3.24991 4.25163C3.24897 4.5773 3.24796 4.92879 3.38328 5.25549C3.5186 5.58218 3.76786 5.83001 3.99881 6.05963L4.05552 6.11612L7.29817 9.35877C7.9195 9.9801 8.07304 10.1524 8.15492 10.3501C8.23679 10.5477 8.25007 10.7782 8.25007 11.6569V19.0253C8.25006 19.4697 8.25005 19.8408 8.27084 20.1454C8.29247 20.4625 8.33912 20.762 8.4594 21.0524C8.73851 21.7262 9.27386 22.2616 9.94769 22.5407C10.2381 22.661 10.5376 22.7076 10.8547 22.7292C11.1593 22.75 11.5304 22.75 11.9748 22.75H12.0253C12.4698 22.75 12.8408 22.75 13.1454 22.7292C13.4625 22.7076 13.7621 22.661 14.0524 22.5407C14.7263 22.2616 15.2616 21.7262 15.5407 21.0524C15.661 20.762 15.7077 20.4625 15.7293 20.1454C15.7501 19.8408 15.7501 19.4697 15.7501 19.0253V11.6569C15.7501 10.7782 15.7633 10.5477 15.8452 10.3501C15.9271 10.1524 16.0806 9.9801 16.702 9.35876L19.9446 6.11612L20.0013 6.05963C20.2323 5.83001 20.4815 5.58218 20.6169 5.25549C20.7522 4.92879 20.7512 4.5773 20.7502 4.25163L20.7501 4.17158L20.7501 3.95526C20.7501 3.52244 20.7502 3.12561 20.7068 2.8028C20.659 2.44732 20.5465 2.07159 20.2375 1.76257C19.9285 1.45355 19.5528 1.3411 19.1973 1.29331C18.8745 1.24991 18.4776 1.24995 18.0448 1.25H5.95532ZM4.82574 2.82187L4.82331 2.82324L4.82193 2.82568C4.82092 2.82761 4.8193 2.83093 4.81723 2.83597C4.80827 2.85775 4.79297 2.90611 4.77999 3.00267C4.75166 3.21339 4.75007 3.5074 4.75007 4.00001V4.17158C4.75007 4.19924 4.75008 4.22534 4.75011 4.25H19.25C19.2501 4.22534 19.2501 4.19924 19.2501 4.17158V4.00001C19.2501 3.5074 19.2485 3.21339 19.2201 3.00267C19.2072 2.90611 19.1919 2.85775 19.1829 2.83597C19.1808 2.83093 19.1792 2.82761 19.1782 2.82568L19.1768 2.82324L19.1744 2.82187C19.1725 2.82086 19.1691 2.81924 19.1641 2.81717C19.1423 2.80821 19.094 2.79291 18.9974 2.77993C18.7867 2.7516 18.4927 2.75001 18.0001 2.75001H6.00007C5.50746 2.75001 5.21346 2.7516 5.00273 2.77993C4.90617 2.79291 4.85781 2.80821 4.83603 2.81717C4.83099 2.81924 4.82767 2.82086 4.82574 2.82187ZM18.1894 5.75H5.81072L8.44434 8.38351C8.75625 8.69482 9.02713 8.96518 9.23748 9.25H14.7627C14.973 8.96519 15.2439 8.69485 15.5558 8.38355L18.1894 5.75ZM14.2634 10.75H9.73675C9.75067 10.9925 9.75042 11.2522 9.75014 11.536L9.75007 19C9.75007 19.4762 9.75047 19.7958 9.76736 20.0433C9.78378 20.284 9.81326 20.4012 9.84522 20.4784C9.97209 20.7846 10.2154 21.028 10.5217 21.1549C10.5989 21.1868 10.7161 21.2163 10.9568 21.2327C11.2043 21.2496 11.5239 21.25 12.0001 21.25C12.4763 21.25 12.7959 21.2496 13.0433 21.2327C13.2841 21.2163 13.4013 21.1868 13.4784 21.1549C13.7847 21.028 14.0281 20.7846 14.1549 20.4784C14.1869 20.4012 14.2164 20.284 14.2328 20.0433C14.2497 19.7958 14.2501 19.4762 14.2501 19L14.25 11.536C14.2497 11.2522 14.2495 10.9925 14.2634 10.75Z" fill="#2E3748"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}


export const KeypadIcon = ({color,style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
  <path d="M14 6H9C5.71252 6 4.06878 6 2.96243 6.90796C2.75989 7.07418 2.57418 7.25989 2.40796 7.46243C1.5 8.56878 1.5 10.2125 1.5 13.5C1.5 16.7875 1.5 18.4312 2.40796 19.5376C2.57418 19.7401 2.75989 19.9258 2.96243 20.092C4.06878 21 5.71252 21 9 21H14C17.2875 21 18.9312 21 20.0376 20.092C20.2401 19.9258 20.4258 19.7401 20.592 19.5376C21.5 18.4312 21.5 16.7875 21.5 13.5C21.5 10.2125 21.5 8.56878 20.592 7.46243C20.4258 7.25989 20.2401 7.07418 20.0376 6.90796C18.9312 6 17.2875 6 14 6Z" stroke="#002520" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M11.5 6V4C11.5 3.44772 11.9477 3 12.5 3C13.0523 3 13.5 2.55228 13.5 2V1" stroke="#002520" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.5 11L7.5 11" stroke="#002520" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11 11L12 11" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.5 11L16.5 11" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.5 16L16.5 16" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}


export const SearchIcon = ({color,style}) => {
    const mycolor = color || "#002520"
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M16.5 16.5L21 21" stroke=${mycolor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19C14.9706 19 19 14.9706 19 10Z" stroke=${mycolor} stroke-width="1.5" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}


export const HeartIcon = ({color,style, secondary}) => {
    const mycolor = color || "#002520"
    const fill = secondary || "none"
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill=${fill}>
  <path d="M18.4626 1.99415C15.7809 0.349229 13.4404 1.01211 12.0344 2.06801C11.4578 2.50096 11.1696 2.71743 11 2.71743C10.8304 2.71743 10.5422 2.50096 9.96565 2.06801C8.55962 1.01211 6.21909 0.349229 3.53744 1.99415C0.0180686 4.15294 -0.778279 11.2749 7.33953 17.2834C8.88572 18.4278 9.65881 19 11 19C12.3412 19 13.1143 18.4278 14.6605 17.2834C22.7783 11.2749 21.9819 4.15294 18.4626 1.99415Z" stroke=${mycolor} stroke-width="1.5" stroke-linecap="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}


export const BellIcon = ({color,style}) => {
    const mycolor = color || "#002520"
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M1.52992 13.7696C1.31727 15.1636 2.268 16.1312 3.43205 16.6134C7.89481 18.4622 14.1052 18.4622 18.5679 16.6134C19.732 16.1312 20.6827 15.1636 20.4701 13.7696C20.3394 12.9129 19.6932 12.1995 19.2144 11.5029C18.5873 10.5793 18.525 9.57183 18.5249 8.5C18.5249 4.35786 15.1559 1 11 1C6.84413 1 3.47513 4.35786 3.47513 8.5C3.47503 9.57183 3.41272 10.5793 2.78561 11.5029C2.30684 12.1995 1.66061 12.9129 1.52992 13.7696Z" stroke=${mycolor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7 18C7.45849 19.7252 9.07553 21 11 21C12.9245 21 14.5415 19.7252 15 18" stroke=${mycolor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const ArrowRight = ({color,style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
<path d="M1 13L6.29289 7.70711C6.62623 7.37377 6.79289 7.20711 6.79289 7C6.79289 6.79289 6.62623 6.62623 6.29289 6.29289L1 1" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const BillIcon = ({color,style}) => {
    const mycolor = color || "#00806E" 
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
<path d="M21 9.5V4.11397C21 3.32299 21 2.92751 20.8059 2.51966C20.6952 2.28705 20.443 1.97064 20.241 1.81079C19.8868 1.53051 19.5912 1.46281 19 1.3274C18.0803 1.11675 17.0659 1 16 1C14.0829 1 12.3325 1.37764 11 2C9.66746 2.62236 7.91707 3 6 3C4.93408 3 3.91969 2.88325 3 2.6726C2.04003 2.45273 1 3.12914 1 4.11397V14.886C1 15.677 1 16.0725 1.19412 16.4803C1.30483 16.7129 1.55696 17.0294 1.75898 17.1892C2.11319 17.4695 2.4088 17.5372 3 17.6726C3.91969 17.8833 4.93408 18 6 18C7.46884 18 8.83983 17.7783 10 17.3947" stroke=${mycolor} stroke-width="1.5" stroke-linecap="round"/>
<path d="M13 17C13 17 14 17 15 19C15 19 18.1765 14 21 13" stroke=${mycolor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.5 9.5C13.5 10.8807 12.3807 12 11 12C9.61929 12 8.5 10.8807 8.5 9.5C8.5 8.11929 9.61929 7 11 7C12.3807 7 13.5 8.11929 13.5 9.5Z" stroke=${mycolor} stroke-width="1.5"/>
<path d="M4.5 10.5L4.5 10.509" stroke=${mycolor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 8.49219L17.5 8.50117" stroke=${mycolor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const SettingsIcon = ({color,style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M20.3175 6.14139L19.8239 5.28479C19.4506 4.63696 19.264 4.31305 18.9464 4.18388C18.6288 4.05472 18.2696 4.15664 17.5513 4.36048L16.3311 4.70418C15.8725 4.80994 15.3913 4.74994 14.9726 4.53479L14.6357 4.34042C14.2766 4.11043 14.0004 3.77133 13.8475 3.37274L13.5136 2.37536C13.294 1.71534 13.1842 1.38533 12.9228 1.19657C12.6615 1.00781 12.3143 1.00781 11.6199 1.00781L10.5051 1.00781C9.81078 1.00781 9.4636 1.00781 9.20223 1.19657C8.94085 1.38533 8.83106 1.71534 8.61149 2.37536L8.27753 3.37274C8.12465 3.77133 7.84845 4.11043 7.48937 4.34042L7.15249 4.53479C6.73374 4.74994 6.25259 4.80994 5.79398 4.70418L4.57375 4.36048C3.85541 4.15664 3.49625 4.05472 3.17867 4.18388C2.86109 4.31305 2.67445 4.63696 2.30115 5.28479L1.80757 6.14139C1.45766 6.74864 1.2827 7.05227 1.31666 7.37549C1.35061 7.69871 1.58483 7.95918 2.05326 8.48012L3.0843 9.63282C3.3363 9.95185 3.51521 10.5078 3.51521 11.0077C3.51521 11.5078 3.33636 12.0636 3.08433 12.3827L2.05326 13.5354C1.58483 14.0564 1.35062 14.3168 1.31666 14.6401C1.2827 14.9633 1.45766 15.2669 1.80757 15.8741L2.30114 16.7307C2.67443 17.3785 2.86109 17.7025 3.17867 17.8316C3.49625 17.9608 3.85542 17.8589 4.57377 17.655L5.79394 17.3113C6.25263 17.2055 6.73387 17.2656 7.15267 17.4808L7.4895 17.6752C7.84851 17.9052 8.12464 18.2442 8.2775 18.6428L8.61149 19.6403C8.83106 20.3003 8.94085 20.6303 9.20223 20.8191C9.4636 21.0078 9.81078 21.0078 10.5051 21.0078H11.6199C12.3143 21.0078 12.6615 21.0078 12.9228 20.8191C13.1842 20.6303 13.294 20.3003 13.5136 19.6403L13.8476 18.6428C14.0004 18.2442 14.2765 17.9052 14.6356 17.6752L14.9724 17.4808C15.3912 17.2656 15.8724 17.2055 16.3311 17.3113L17.5513 17.655C18.2696 17.8589 18.6288 17.9608 18.9464 17.8316C19.264 17.7025 19.4506 17.3785 19.8239 16.7307L20.3175 15.8741C20.6674 15.2669 20.8423 14.9633 20.8084 14.6401C20.7744 14.3168 20.5402 14.0564 20.0718 13.5354L19.0407 12.3827C18.7887 12.0636 18.6098 11.5078 18.6098 11.0077C18.6098 10.5078 18.7888 9.95185 19.0407 9.63282L20.0718 8.48012C20.5402 7.95918 20.7744 7.69871 20.8084 7.37549C20.8423 7.05227 20.6674 6.74864 20.3175 6.14139Z" stroke="#00806E" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M14.5195 11C14.5195 12.933 12.9525 14.5 11.0195 14.5C9.08653 14.5 7.51953 12.933 7.51953 11C7.51953 9.067 9.08653 7.5 11.0195 7.5C12.9525 7.5 14.5195 9.067 14.5195 11Z" stroke="#00806E" stroke-width="1.5"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const WarningIcon = ({color,style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M4.32171 8.68293C6.73539 4.41199 7.94222 2.27651 9.59826 1.72681C10.5093 1.4244 11.4907 1.4244 12.4017 1.72681C14.0578 2.27651 15.2646 4.41199 17.6783 8.68293C20.092 12.9539 21.2988 15.0893 20.9368 16.8293C20.7376 17.7866 20.2469 18.6549 19.535 19.3097C18.241 20.5 15.8274 20.5 11 20.5C6.17265 20.5 3.75897 20.5 2.46496 19.3097C1.75308 18.6549 1.26239 17.7866 1.06322 16.8293C0.701194 15.0893 1.90803 12.9539 4.32171 8.68293Z" stroke="#00806E" stroke-width="1.5"/>
  <path d="M10.992 15H11.001" stroke="#00806E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11 12L11 8" stroke="#00806E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const InfoIcon = ({color,style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <circle cx="11" cy="11" r="10" stroke="#00806E" stroke-width="1.5"/>
  <path d="M9 8C9 6.89543 9.89543 6 11 6C12.1046 6 13 6.89543 13 8C13 8.39815 12.8837 8.76913 12.6831 9.08079C12.0854 10.0097 11 10.8954 11 12V12.5" stroke="#00806E" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M10.992 16H11.001" stroke="#00806E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const EditIcon = ({color,style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M11.7281 3.2382C12.3491 2.56539 12.6596 2.22899 12.9895 2.03276C13.7856 1.55929 14.7659 1.54457 15.5753 1.99393C15.9108 2.18016 16.2308 2.50709 16.8709 3.16096C17.511 3.81483 17.831 4.14176 18.0133 4.48443C18.4532 5.31126 18.4388 6.31265 17.9753 7.12591C17.7832 7.46296 17.4539 7.78014 16.7953 8.4145L8.95888 15.9622C7.71075 17.1644 7.08669 17.7655 6.30674 18.0701C5.52679 18.3747 4.66936 18.3523 2.95449 18.3075L2.72117 18.3014C2.19911 18.2877 1.93808 18.2809 1.78634 18.1087C1.63461 17.9365 1.65532 17.6706 1.69675 17.1388L1.71925 16.85C1.83586 15.3533 1.89417 14.6049 2.18644 13.9322C2.47872 13.2594 2.98288 12.7132 3.99121 11.6207L11.7281 3.2382Z" stroke="#002520" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M10.8334 3.33398L16.6667 9.16732" stroke="#002520" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M11.6667 18.334L18.3334 18.334" stroke="#002520" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const PhoneIcon = ({color,style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M2.77762 10.9424C1.8296 9.28931 1.37185 7.93948 1.09584 6.57121C0.687622 4.54758 1.62181 2.57081 3.16938 1.30947C3.82345 0.776383 4.57323 0.958518 4.96 1.6524L5.83318 3.21891C6.52529 4.46057 6.87134 5.08139 6.8027 5.73959C6.73407 6.39779 6.26737 6.93386 5.33397 8.00601L2.77762 10.9424ZM2.77762 10.9424C4.69651 14.2883 7.70784 17.3013 11.0576 19.2224M11.0576 19.2224C12.7107 20.1704 14.0605 20.6282 15.4288 20.9042C17.4524 21.3124 19.4292 20.3782 20.6905 18.8306C21.2236 18.1766 21.0415 17.4268 20.3476 17.04L18.7811 16.1668C17.5394 15.4747 16.9186 15.1287 16.2604 15.1973C15.6022 15.2659 15.0661 15.7326 13.994 16.666L11.0576 19.2224Z" stroke=${color} stroke-width="1.5" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}


export const LocHistoryIcon = ({color,style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
  <path d="M11.6177 20.367C11.1841 20.773 10.6044 21 10.0011 21C9.39785 21 8.81818 20.773 8.38449 20.367C4.41302 16.626 -0.909237 12.4469 1.68627 6.37966C3.08963 3.09916 6.45834 1 10.0011 1C13.5439 1 16.9126 3.09916 18.316 6.37966C20.9082 12.4393 15.599 16.6389 11.6177 20.367Z" fill="#C18700" stroke="#C18700" stroke-width="1.5"/>
  <path d="M13.5 10C13.5 11.933 11.933 13.5 10 13.5C8.067 13.5 6.5 11.933 6.5 10C6.5 8.067 8.067 6.5 10 6.5C11.933 6.5 13.5 8.067 13.5 10Z" fill="#FEF6E5"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}


export const ReminderIcon = ({color,style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M11 21C5.47711 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C15.4776 1 19.2257 3.94289 20.5 8H18" stroke="#CE7100" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11 7V11L13 13" stroke="#CE7100" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20.9551 12C20.9848 11.6709 21 11.3373 21 11M14 21C14.3416 20.8876 14.6753 20.7564 15 20.6078M19.7906 16C19.9835 15.6284 20.1555 15.2433 20.305 14.8462M17.1925 19.2292C17.5369 18.9441 17.8631 18.6358 18.1688 18.3065" stroke="#CE7100" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const HornIcon = ({color,style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M12.9263 2.41103L6.27352 5.60452C5.76151 5.85029 5.21443 5.91187 4.65675 5.78693C4.29177 5.70517 4.10926 5.66429 3.9623 5.64751C2.13743 5.43912 1 6.88342 1 8.54427V9.45573C1 11.1166 2.13743 12.5609 3.9623 12.3525C4.10926 12.3357 4.29178 12.2948 4.65675 12.2131C5.21443 12.0881 5.76151 12.1497 6.27352 12.3955L12.9263 15.589C14.4534 16.3221 15.217 16.6886 16.0684 16.4029C16.9197 16.1172 17.2119 15.5041 17.7964 14.278C19.4012 10.9112 19.4012 7.08885 17.7964 3.72196C17.2119 2.49586 16.9197 1.88281 16.0684 1.5971C15.217 1.3114 14.4534 1.67794 12.9263 2.41103Z" stroke="#002520" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11 15V15.5C11 16.7841 11 17.4261 10.776 17.7886C10.4773 18.2719 9.93115 18.545 9.36529 18.4939C8.9409 18.4557 8.42726 18.0704 7.4 17.3L6.2 16.4C5.22253 15.6669 5 15.2218 5 14V12.5" stroke="#002520" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.5 12V6" stroke="#002520" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const SuccessIcon = ({color,style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M16 2.33782C14.5291 1.48697 12.8214 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21C16.5228 21 21 16.5228 21 11C21 10.3151 20.9311 9.64622 20.8 9" stroke="#449C0A" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M7 11.5C7 11.5 8.5 11.5 10.5 15C10.5 15 16.0588 5.83333 21 4" stroke="#449C0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const SunIcon = ({color,style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M16 11C16 13.7614 13.7614 16 11 16C8.23858 16 6 13.7614 6 11C6 8.23858 8.23858 6 11 6C13.7614 6 16 8.23858 16 11Z" stroke="#00806E" stroke-width="1.5"/>
  <path d="M11 1V2.5M11 19.5V21M18.0708 18.0713L17.0101 17.0106M4.98926 4.98926L3.9286 3.9286M21 11H19.5M2.5 11H1M18.0713 3.92871L17.0106 4.98937M4.98975 17.0107L3.92909 18.0714" stroke="#00806E" stroke-width="1.5" stroke-linecap="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const NightIcon = ({color,style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M20.5 13.0784C19.3003 13.7189 17.9301 14.0821 16.4751 14.0821C11.7491 14.0821 7.91792 10.2509 7.91792 5.52485C7.91792 4.06986 8.28105 2.69968 8.92163 1.5C4.66765 2.49698 1.5 6.31513 1.5 10.8731C1.5 16.1899 5.8101 20.5 11.1269 20.5C15.6849 20.5 19.503 17.3324 20.5 13.0784Z" stroke="#00806E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const TermsIcon = ({color,style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
  <path d="M7 21C7.35984 21 8.69078 20.3926 10.0494 19.1778M10.0494 19.1778C11.2078 18.1419 12.3863 16.6643 13 14.7452C14.3333 10.5753 6.33333 14.7452 9 18.2201C9.32811 18.6476 9.68145 18.9601 10.0494 19.1778ZM10.0494 19.1778C11.6521 20.1259 13.5311 19.274 14.8041 18.2944C15.1932 17.995 15.3877 17.8453 15.5038 17.8919C15.62 17.9385 15.6878 18.2064 15.8236 18.7422C16.2581 20.4569 17.5415 21.841 19 19.6105" stroke="#00806E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18 12L18 6.89072C18 5.17637 18 4.31919 17.732 3.63459C17.3013 2.53399 16.3902 1.66585 15.2352 1.25535C14.5168 1 13.6173 1 11.8182 1C8.66981 1 7.09563 1 5.83836 1.44686C3.81714 2.16523 2.22281 3.68448 1.46894 5.61052C1 6.80859 0.999999 8.30864 0.999999 11.3088L0.999999 13.8859C0.999998 16.9936 0.999998 18.5474 1.8477 19.6265C2.09058 19.9356 2.37862 20.2101 2.70307 20.4416C3.07016 20.7034 3.48961 20.8804 4 21" stroke="#00806E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1 11C1 9.15905 2.49238 7.66667 4.33333 7.66667C4.99912 7.66667 5.78404 7.78333 6.43137 7.60988C7.00652 7.45576 7.45576 7.00652 7.60988 6.43136C7.78333 5.78404 7.66667 4.99912 7.66667 4.33333C7.66667 2.49238 9.15905 1 11 1" stroke="#00806E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const ShieldIcon = ({color,style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M10.9982 1C7.99043 1 6.04018 3.01899 3.73371 3.7549C2.79589 4.05413 2.32697 4.20374 2.1372 4.41465C1.94743 4.62556 1.89186 4.93375 1.78072 5.55013C0.591434 12.146 3.1909 18.244 9.39029 20.6175C10.0564 20.8725 10.3894 21 11.0015 21C11.6135 21 11.9466 20.8725 12.6126 20.6175C18.8116 18.2439 21.4086 12.146 20.219 5.55013C20.1078 4.93364 20.0522 4.6254 19.8624 4.41449C19.6726 4.20358 19.2037 4.05405 18.2659 3.75499C15.9585 3.01915 14.0061 1 10.9982 1Z" stroke="#00806E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 12C8 12 9 12 10 14C10 14 13.1765 9 16 8" stroke="#00806E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const SmartphoneIcon = ({color,style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
  <path d="M2 5C2.08715 3.58055 2.32629 2.67665 2.98247 2.02513C4.01491 1 5.67661 1 9 1C12.3234 1 13.9851 1 15.0175 2.02513C15.6737 2.67665 15.9128 3.58055 16 5M16 17C15.9128 18.4194 15.6737 19.3233 15.0175 19.9749C13.9851 21 12.3234 21 9 21C5.67661 21 4.01491 21 2.98247 19.9749C2.32629 19.3233 2.08715 18.4194 2 17" stroke="#00806E" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M8 18H10" stroke="#00806E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.5 8L16.0332 9.58579C16.6777 10.2525 17 10.5858 17 11C17 11.4142 16.6777 11.7475 16.0332 12.4142L14.5 14" stroke="#00806E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.5 8L1.96682 9.58579C1.32228 10.2525 1 10.5858 1 11C1 11.4142 1.32227 11.7475 1.96682 12.4142L3.5 14" stroke="#00806E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const LicenseIcon = ({color,style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
  <path d="M10.5294 1C14.5225 1 16.519 1 17.7595 2.17157C19 3.34315 19 5.22876 19 9V13C19 16.7712 19 18.6569 17.7595 19.8284C16.519 21 14.5225 21 10.5294 21H9.47059C5.47751 21 3.48098 21 2.24049 19.8284C1 18.6569 1 16.7712 1 13L1 9C1 5.22876 1 3.34315 2.24049 2.17157C3.48098 1 5.47752 1 9.47059 1L10.5294 1Z" stroke="#00806E" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M6 6H14" stroke="#00806E" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M6 11H14" stroke="#00806E" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M6 16L10 16" stroke="#00806E" stroke-width="1.5" stroke-linecap="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const LogoutIcon = ({color,style}) => {
    const mystroke = color || "#DD214F"
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
  <path d="M5.02331 4.5C2.59826 6.11238 1 8.86954 1 12C1 16.9706 5.02944 21 10 21C14.9706 21 19 16.9706 19 12C19 8.86954 17.4017 6.11238 14.9767 4.5" stroke=${mystroke} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 1V9" stroke=${mystroke} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const EmailIcon = ({color,style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
  <path d="M6 6.5L8.94202 8.23943C10.6572 9.25352 11.3428 9.25352 13.058 8.23943L16 6.5" stroke="#00806E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1.01577 11.4756C1.08114 14.5412 1.11383 16.0739 2.24496 17.2094C3.37608 18.3448 4.95033 18.3843 8.09883 18.4634C10.0393 18.5122 11.9607 18.5122 13.9012 18.4634C17.0497 18.3843 18.6239 18.3448 19.7551 17.2094C20.8862 16.0739 20.9189 14.5412 20.9842 11.4756C21.0053 10.4899 21.0053 9.51008 20.9842 8.52439C20.9189 5.45886 20.8862 3.92609 19.7551 2.79066C18.6239 1.65523 17.0497 1.61568 13.9012 1.53657C11.9607 1.48781 10.0393 1.48781 8.09882 1.53656C4.95033 1.61566 3.37608 1.65521 2.24495 2.79065C1.11382 3.92608 1.08114 5.45885 1.01576 8.52438C0.994745 9.51007 0.994745 10.4899 1.01577 11.4756Z" stroke="#00806E" stroke-width="1.5" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const UploadImageIcon = ({color,style}) => {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M12 2.00231C11.5299 2 11.0307 2 10.5 2C6.02166 2 3.78249 2 2.39124 3.39124C1 4.78249 1 7.02166 1 11.5C1 15.9783 1 18.2175 2.39124 19.6088C3.78249 21 6.02166 21 10.5 21C14.9783 21 17.2175 21 18.6088 19.6088C19.9472 18.2703 19.998 16.147 19.9999 12" stroke="#5D6C87" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M1 13.1354C1.61902 13.0455 2.24484 13.0011 2.87171 13.0027C5.52365 12.9466 8.11064 13.7729 10.1711 15.3342C12.082 16.7821 13.4247 18.7749 14 21" stroke="#5D6C87" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M20 15.8962C18.8246 15.3009 17.6088 14.9988 16.3862 15.0001C14.5345 14.9928 12.7015 15.6733 11 17" stroke="#5D6C87" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M16 3.5C16.4915 2.9943 17.7998 1 18.5 1M21 3.5C20.5085 2.9943 19.2002 1 18.5 1M18.5 1V9" stroke="#5D6C87" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const LocationMarkerIcon = ({color,style,dotcolor}) => {
    const mycolor = color || "#FBFCFE"
    const mydotcolor = dotcolor || "#002520"
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 12 16" fill="none">
  <path d="M2.66669 12C1.4474 12.2745 0.666687 12.6962 0.666687 13.1691C0.666687 13.9962 3.0545 14.6667 6.00002 14.6667C8.94554 14.6667 11.3334 13.9962 11.3334 13.1691C11.3334 12.6962 10.5526 12.2745 9.33335 12" stroke=${mycolor} stroke-linecap="round"/>
  <path d="M6.83825 11.6621C6.61339 11.8786 6.31286 11.9997 6.00008 11.9997C5.68731 11.9997 5.38677 11.8786 5.16192 11.6621C3.10285 9.66686 0.34344 7.43803 1.68912 4.20216C2.41672 2.45256 4.16328 1.33301 6.00008 1.33301C7.83689 1.33301 9.58345 2.45256 10.311 4.20216C11.655 7.43395 8.9024 9.67374 6.83825 11.6621Z" fill=${mycolor} stroke=${mycolor}/>
  <path d="M7.66665 5.99967C7.66665 6.92015 6.92045 7.66634 5.99998 7.66634C5.07951 7.66634 4.33331 6.92015 4.33331 5.99967C4.33331 5.0792 5.07951 4.33301 5.99998 4.33301C6.92045 4.33301 7.66665 5.0792 7.66665 5.99967Z" fill=${mydotcolor}/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const CancelIcon = ({color,style}) => {
    const mycolor = color || "#FBFCFE"
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 16 20" fill="none">
  <path d="M15.0005 1.5L1.00049 15.5M1.00049 1.5L15.0005 15.5" stroke="#5D6C87" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const WalkIcon = ({color,style}) => {
    const mycolor = color || "#FBFCFE"
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
  <path d="M12.1666 2.75C12.1666 3.44036 11.607 4 10.9166 4C10.2263 4 9.66663 3.44036 9.66663 2.75C9.66663 2.05964 10.2263 1.5 10.9166 1.5C11.607 1.5 12.1666 2.05964 12.1666 2.75Z" fill="#5D6C87" stroke="#5D6C87" stroke-width="1.5"/>
  <path d="M8.72487 5.66455C8.45366 5.66451 8.18219 5.66516 8 5.66731L6.94242 7.29915C6.36097 8.19632 6.07024 8.64491 6.05891 9.1159C6.05386 9.32569 6.08848 9.53455 6.16094 9.73149C6.32362 10.1736 6.74352 10.5044 7.58333 11.1661L10.5 6.7307C10.4065 6.66056 10.3053 6.55511 10.2068 6.43741C9.86302 6.02664 9.69112 5.82126 9.52352 5.74296C9.35592 5.66466 9.14557 5.66462 8.72487 5.66455Z" fill="#5D6C87"/>
  <path d="M10.5 16.5002L9.94658 14.3202C9.76342 13.5987 9.38459 12.9399 8.8506 12.414L7.58333 11.1661M3 8.29402C3.83333 6.65257 5.11472 5.70143 8 5.66731M8 5.66731C8.18219 5.66516 8.45366 5.66451 8.72487 5.66455C9.14557 5.66462 9.35592 5.66466 9.52352 5.74296C9.69112 5.82126 9.86302 6.02664 10.2068 6.43741C10.3053 6.55511 10.4065 6.66056 10.5 6.7307M8 5.66731L6.94242 7.29915C6.36097 8.19632 6.07024 8.64491 6.05891 9.1159C6.05386 9.32569 6.08848 9.53455 6.16094 9.73149C6.32362 10.1736 6.74352 10.5044 7.58333 11.1661M10.5 6.7307C11.4623 7.45229 12.9689 7.74291 14.6667 5.83212M10.5 6.7307L7.58333 11.1661" stroke="#5D6C87" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1.33325 13.7754L1.89844 13.9098C3.33877 14.2525 4.83596 13.5972 5.49992 12.3335" stroke="#5D6C87" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const RateIcon = ({color,style}) => {
    const mycolor = color || "#FBFCFE"
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.00004 12.0002C7.11168 12.4151 5.94475 12.6668 4.66671 12.6668C3.95609 12.6668 3.27983 12.589 2.66671 12.4486C2.27257 12.3583 2.0755 12.3132 1.83936 12.1263C1.70468 12.0197 1.53659 11.8088 1.46278 11.6537C1.33337 11.3818 1.33337 11.1182 1.33337 10.5908L1.33337 3.40948C1.33337 2.75292 2.02673 2.30198 2.66671 2.44857C3.27983 2.589 3.95609 2.66683 4.66671 2.66683C5.94475 2.66683 7.11168 2.41507 8.00004 2.00016C8.8884 1.58525 10.0553 1.3335 11.3334 1.3335C12.044 1.3335 12.7202 1.41133 13.3334 1.55176C13.7275 1.64204 13.9246 1.68717 14.1607 1.87402C14.2954 1.98059 14.4635 2.19153 14.5373 2.34661C14.6667 2.6185 14.6667 2.88216 14.6667 3.40948L14.6667 10.5908C14.6667 11.2474 13.9734 11.6983 13.3334 11.5518C12.7202 11.4113 12.044 11.3335 11.3334 11.3335C10.0553 11.3335 8.8884 11.5853 8.00004 12.0002Z" fill="#5D6C87" stroke="#5D6C87"/>
  <path d="M1.33337 14.0003C2.22173 14.4152 3.38866 14.667 4.66671 14.667C5.94475 14.667 7.11168 14.4152 8.00004 14.0003C8.8884 13.5854 10.0553 13.3337 11.3334 13.3337C12.6114 13.3337 13.7783 13.5854 14.6667 14.0003" stroke="#5D6C87" stroke-linecap="round"/>
  <path d="M9.66671 7.00016C9.66671 7.92064 8.92052 8.66683 8.00004 8.66683C7.07957 8.66683 6.33337 7.92064 6.33337 7.00016C6.33337 6.07969 7.07957 5.3335 8.00004 5.3335C8.92052 5.3335 9.66671 6.07969 9.66671 7.00016Z" fill="#FBFCFE"/>
  <path d="M3.66675 7.66699L3.66675 7.67298" stroke="#5D6C87" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12.3334 6.32812L12.3334 6.33411" stroke="#5D6C87" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const DirectionsIcon = ({color,style}) => {
    const mycolor = color || "#FBFCFE"
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
  <path d="M1.2791 1.95951C1.64073 1.48768 1.82154 1.25176 2.06873 1.12588C2.31591 1 2.59835 1 3.16323 1H4.77366C5.35175 1 5.64079 1 5.82037 1.19526C5.99996 1.39052 5.99996 1.70479 5.99996 2.33333V5H3.16323C2.59835 5 2.31591 5 2.06873 4.87412C1.82154 4.74824 1.64073 4.51232 1.2791 4.04049L1.13585 3.85358C0.823033 3.44544 0.666626 3.24137 0.666626 3C0.666626 2.75863 0.823033 2.55456 1.13585 2.14642L1.2791 1.95951Z" stroke="#1A73E9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.7209 5.293C10.3592 4.82117 10.1784 4.58526 9.93123 4.45938C9.68405 4.3335 9.40161 4.3335 8.83673 4.3335H6V8.3335H8.83673C9.40161 8.3335 9.68405 8.3335 9.93123 8.20761C10.1784 8.08173 10.3592 7.84582 10.7209 7.37399L10.8641 7.18707C11.1769 6.77893 11.3333 6.57486 11.3333 6.3335C11.3333 6.09213 11.1769 5.88806 10.8641 5.47992L10.7209 5.293Z" stroke="#1A73E9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6 12.9998L6 1.6665" stroke="#1A73E9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4 13H8" stroke="#1A73E9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const CriticalIcon = ({color,style}) => {
    const mycolor = color || "#FBFCFE"
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M2.54785 5.45512C4.15696 2.60783 4.96152 1.18418 6.06555 0.817711C6.67292 0.616102 7.32717 0.616102 7.93453 0.817711C9.03856 1.18418 9.84312 2.60783 11.4522 5.45512C13.0614 8.30242 13.8659 9.72606 13.6246 10.8861C13.4918 11.5242 13.1647 12.1031 12.6901 12.5396C11.8274 13.3332 10.2183 13.3332 7.00004 13.3332C3.78181 13.3332 2.17269 13.3332 1.31002 12.5396C0.835427 12.1031 0.508301 11.5242 0.375523 10.8861C0.13417 9.72606 0.938729 8.30242 2.54785 5.45512Z" fill="#DD214F"/>
  <path d="M6.99474 9.6665H7.00073" stroke="#E9F0F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7 7.6665L7 4.99984" stroke="#E9F0F4" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const VideoIcon = ({color,style}) => {
    const mycolor = color || "#FBFCFE"
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
  <path d="M1 8.5C1 5.20017 1 3.55025 2.02513 2.52513C3.05025 1.5 4.70017 1.5 8 1.5H9C12.2998 1.5 13.9497 1.5 14.9749 2.52513C16 3.55025 16 5.20017 16 8.5V10.5C16 13.7998 16 15.4497 14.9749 16.4749C13.9497 17.5 12.2998 17.5 9 17.5H8C4.70017 17.5 3.05025 17.5 2.02513 16.4749C1 15.4497 1 13.7998 1 10.5V8.5Z" fill="#2E3748" stroke="#2E3748" stroke-width="1.5"/>
  <path d="M16 6.40585L16.1259 6.30196C18.2417 4.55623 19.2996 3.68336 20.1498 4.10482C21 4.52628 21 5.92355 21 8.71808V10.2819C21 13.0765 21 14.4737 20.1498 14.8952C19.2996 15.3166 18.2417 14.4438 16.1259 12.698L16 12.5941" stroke="#2E3748" stroke-width="1.5" stroke-linecap="round"/>
  <circle cx="10.5" cy="7" r="1.5" fill="#FBFCFE"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const LocationAlternativeIcon = ({color,style}) => {
    const mycolor = color || "#FBFCFE"
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
  <path d="M9.33341 7.33333C9.33341 8.622 8.28875 9.66667 7.00008 9.66667C5.71142 9.66667 4.66675 8.622 4.66675 7.33333C4.66675 6.04467 5.71142 5 7.00008 5C8.28875 5 9.33341 6.04467 9.33341 7.33333Z" stroke="#5D6C87"/>
  <path d="M7 1.3335C10.247 1.3335 13 4.02215 13 7.28401C13 10.5978 10.2022 12.9233 7.618 14.5046C7.42967 14.6109 7.2167 14.6668 7 14.6668C6.7833 14.6668 6.57033 14.6109 6.382 14.5046C3.8026 12.9079 1 10.6093 1 7.28401C1 4.02215 3.75296 1.3335 7 1.3335Z" stroke="#5D6C87"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const UnlockIcon = ({color,style}) => {
    const mycolor = color || "#FBFCFE"
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="22" viewBox="0 0 17 22" fill="none">
  <path d="M1.5 14C1.5 10.134 4.63401 7 8.5 7C12.366 7 15.5 10.134 15.5 14C15.5 17.866 12.366 21 8.5 21C4.63401 21 1.5 17.866 1.5 14Z" stroke="#002520" stroke-width="1.5"/>
  <path d="M4 8.5V5.5C4 3.01472 6.01472 1 8.5 1C10.0602 1 11.435 1.79401 12.2422 3" stroke="#002520" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M8.5 15V13" stroke="#002520" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const InfoIconAlt = ({color,style}) => {
    const mycolor = color || "#FBFCFE"
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M18.3334 9.99967C18.3334 5.3973 14.6025 1.66634 10.0001 1.66634C5.39771 1.66634 1.66675 5.3973 1.66675 9.99967C1.66675 14.602 5.39771 18.333 10.0001 18.333C14.6025 18.333 18.3334 14.602 18.3334 9.99967Z" stroke="#5D6C87" stroke-width="1.5"/>
  <path d="M10.202 14.1665V9.99984C10.202 9.607 10.202 9.41058 10.0799 9.28854C9.95791 9.1665 9.76149 9.1665 9.36865 9.1665" stroke="#5D6C87" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.99349 6.6665H10.001" stroke="#5D6C87" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const DeleteIcon = ({color,style}) => {
    const mycolor = color || "#FBFCFE"
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
  <path d="M12 3.6665L11.5868 10.3499C11.4813 12.0575 11.4285 12.9113 11.0005 13.5251C10.7889 13.8286 10.5164 14.0847 10.2005 14.2772C9.56141 14.6665 8.70599 14.6665 6.99516 14.6665C5.28208 14.6665 4.42554 14.6665 3.78604 14.2765C3.46987 14.0836 3.19733 13.827 2.98579 13.5231C2.55792 12.9082 2.5063 12.0532 2.40307 10.3433L2 3.6665" stroke="#A8B9CA" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M9.70382 3.66683H4.36862L4.7724 2.781L4.77241 2.781C5.06709 2.13453 5.21443 1.8113 5.4782 1.60894C5.53666 1.56409 5.59873 1.52417 5.66379 1.48958C5.95732 1.3335 6.31255 1.3335 7.02302 1.3335C7.71608 1.3335 8.06261 1.3335 8.35135 1.4833C8.4154 1.51652 8.47664 1.5549 8.53448 1.59803C8.79522 1.79251 8.94638 2.10433 9.2487 2.72798L9.70382 3.66683Z" fill="#A8B9CA"/>
  <path d="M1 3.66683H13M9.70382 3.66683L9.2487 2.72798C8.94638 2.10433 8.79522 1.79251 8.53448 1.59803C8.47664 1.5549 8.4154 1.51652 8.35135 1.4833C8.06261 1.3335 7.71608 1.3335 7.02302 1.3335C6.31255 1.3335 5.95732 1.3335 5.66379 1.48958C5.59873 1.52417 5.53666 1.56409 5.4782 1.60894C5.21443 1.8113 5.06709 2.13453 4.7724 2.781L4.36862 3.66683" stroke="#A8B9CA" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M5.33325 11L5.33325 7" stroke="#A8B9CA" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M8.66675 11L8.66675 7" stroke="#A8B9CA" stroke-width="1.2" stroke-linecap="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const CautionIcon = ({color,style}) => {
    const mycolor = color || "#FBFCFE"
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="38" viewBox="0 0 40 38" fill="none">
  <path d="M6.64342 14.3659C11.4708 5.82397 13.8844 1.55303 17.1965 0.453621C19.0186 -0.151207 20.9814 -0.151207 22.8035 0.453621C26.1156 1.55303 28.5292 5.82397 33.3566 14.3659C38.1839 22.9077 40.5976 27.1787 39.8736 30.6587C39.4752 32.5732 38.4938 34.3097 37.0701 35.6194C34.4821 38 29.6547 38 20 38C10.3453 38 5.51794 38 2.92993 35.6194C1.50616 34.3097 0.52478 32.5732 0.126447 30.6587C-0.597612 27.1787 1.81607 22.9077 6.64342 14.3659Z" fill="#DD214F"/>
  <path d="M19.984 27H20.002" stroke="#FBFCFE" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20 21L20 13" stroke="#FBFCFE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const TimeIcon = ({color,style}) => {
    const mycolor = color || "#FBFCFE"
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
  <path d="M7.22046 8.76785L5.1665 4.6665L8.7796 7.51958C9.29325 7.92519 9.29588 8.69796 8.78498 9.10699C8.27409 9.51602 7.51246 9.35092 7.22046 8.76785Z" stroke="#C18700" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.1665 3.2134C1.93226 4.42608 1.1665 6.11597 1.1665 7.98511C1.1665 11.6753 4.15127 14.6668 7.83317 14.6668C11.5151 14.6668 14.4998 11.6753 14.4998 7.98511C14.4998 4.74953 12.2052 2.05111 9.15799 1.43532C8.60066 1.32269 8.32199 1.26638 8.07758 1.46688C7.83317 1.66738 7.83317 1.9915 7.83317 2.63973V3.3079" stroke="#C18700" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const ArrowIcon = ({color,style}) => {
    const mycolor = color || "#FBFCFE"
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="14" viewBox="0 0 21 14" fill="none">
  <path d="M19.1667 6.99951L1.66675 6.99951" stroke="#002520" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.4998 1.1665L19.626 6.29273C19.9593 6.62606 20.126 6.79273 20.126 6.99984C20.126 7.20694 19.9593 7.37361 19.626 7.70694L14.4998 12.8332" stroke="#002520" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const LoaderIcon = ({color,style,secondaryColor,fill}) => {
    const mycolor = color || "rgba(242, 169, 0, 1)"
    const secColor = secondaryColor || "rgba(242, 169, 0, 0)"
    const myfill ="#F2A900"
    const xml = `<svg  width="48" height="48" viewBox="0 0 48 48" fill="none">
  <g clip-path="url(#paint0_angular_1004_3725_clip_path)" data-figma-skip-parse="true"><g transform="matrix(0 0.024 -0.024 0 24 24)"><foreignObject x="-1041.67" y="-1041.67" width="2083.33" height="2083.33"><div xmlns="http://www.w3.org/1999/xhtml" style="background:conic-gradient(from 90deg,rgba(242, 169, 0, 1) 0deg,rgba(242, 169, 0, 0) 360deg);height:100%;width:100%;opacity:1"></div></foreignObject></g></g><path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM7.97565 24C7.97565 32.85 15.15 40.0244 24 40.0244C32.85 40.0244 40.0244 32.85 40.0244 24C40.0244 15.15 32.85 7.97565 24 7.97565C15.15 7.97565 7.97565 15.15 7.97565 24Z" data-figma-gradient-fill="{&quot;type&quot;:&quot;GRADIENT_ANGULAR&quot;,&quot;stops&quot;:[{&quot;color&quot;:{&quot;r&quot;:0.94901961088180542,&quot;g&quot;:0.66274511814117432,&quot;b&quot;:0.0,&quot;a&quot;:1.0},&quot;position&quot;:0.0},{&quot;color&quot;:{&quot;r&quot;:0.94901961088180542,&quot;g&quot;:0.66274511814117432,&quot;b&quot;:0.0,&quot;a&quot;:0.0},&quot;position&quot;:1.0}],&quot;stopsVar&quot;:[{&quot;color&quot;:{&quot;r&quot;:0.94901961088180542,&quot;g&quot;:0.66274511814117432,&quot;b&quot;:0.0,&quot;a&quot;:1.0},&quot;position&quot;:0.0},{&quot;color&quot;:{&quot;r&quot;:0.94901961088180542,&quot;g&quot;:0.66274511814117432,&quot;b&quot;:0.0,&quot;a&quot;:0.0},&quot;position&quot;:1.0}],&quot;transform&quot;:{&quot;m00&quot;:2.9391524462044029e-15,&quot;m01&quot;:-48.0,&quot;m02&quot;:48.0,&quot;m10&quot;:48.0,&quot;m11&quot;:2.9391524462044029e-15,&quot;m12&quot;:-2.9391524462044029e-15},&quot;opacity&quot;:1.0,&quot;blendMode&quot;:&quot;NORMAL&quot;,&quot;visible&quot;:true}"/>
  <circle cx="24" cy="44" r="4" fill="#F2A900"/>
  <defs>
    <clipPath id="paint0_angular_1004_3725_clip_path"><path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM7.97565 24C7.97565 32.85 15.15 40.0244 24 40.0244C32.85 40.0244 40.0244 32.85 40.0244 24C40.0244 15.15 32.85 7.97565 24 7.97565C15.15 7.97565 7.97565 15.15 7.97565 24Z"/></clipPath></defs>
    </svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const HelmetIcon = ({color,style}) => {

    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
  <path d="M10.4046 1.5C5.21058 1.5 1 5.74151 1 10.9737C1 14.3912 2.79635 17.386 5.48977 19.0523C6.06928 19.4108 6.54664 19.5 7.22657 19.5L13.763 19.5C15.1727 19.5 16.3155 18.3807 16.3155 17C16.3155 15.6193 15.1727 14.5 13.763 14.5C13.3687 14.5 12.6311 14.6485 12.3534 14.3267C12.2038 14.1533 12.2359 13.9366 12.3 13.5031C12.7388 10.5363 15.2376 10 18.4564 10C19.2168 10 19.9772 9.15497 20.5235 8.36188C20.9052 7.80765 21.096 7.53053 20.952 7.26527C20.808 7 20.4444 7 19.7171 7H18.5C17 3.5 13.9924 1.5 10.4046 1.5Z" fill="#916500"/>
  <path d="M18.5 7C17 3.5 13.9924 1.5 10.4046 1.5C5.21058 1.5 1 5.74151 1 10.9737C1 14.3912 2.79635 17.386 5.48977 19.0523C6.06928 19.4108 6.54664 19.5 7.22657 19.5L13.763 19.5C15.1727 19.5 16.3155 18.3807 16.3155 17C16.3155 15.6193 15.1727 14.5 13.763 14.5C13.3687 14.5 12.6311 14.6485 12.3534 14.3267C12.2038 14.1533 12.2359 13.9366 12.3 13.5031C12.7388 10.5363 15.2376 10 18.4564 10C19.2168 10 19.9772 9.15497 20.5235 8.36188C20.9052 7.80765 21.096 7.53053 20.952 7.26527C20.808 7 20.4444 7 19.7171 7H18.5ZM18.5 7L14.0693 7" stroke="#302200" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.0078 17L13.9988 17" stroke="#302200" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const TrafficIcon = ({color,style}) => {

    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="23" viewBox="0 0 18 23" fill="none">
  <path d="M9 16.5C7.13077 16.5 6.19615 16.5 5.5 16.0981C5.04394 15.8348 4.66523 15.4561 4.40192 15C4 14.3038 4 13.3692 4 11.5L4 6.5C4 4.63077 4 3.69615 4.40192 3C4.66523 2.54394 5.04394 2.16523 5.5 1.90192C6.19615 1.5 7.13077 1.5 9 1.5C10.8692 1.5 11.8038 1.5 12.5 1.90192C12.9561 2.16523 13.3348 2.54394 13.5981 3C14 3.69615 14 4.63077 14 6.5V11.5C14 13.3692 14 14.3038 13.5981 15C13.3348 15.4561 12.9561 15.8348 12.5 16.0981C11.8038 16.5 10.8692 16.5 9 16.5Z" fill="#00B39A" stroke="#004D42" stroke-width="1.5"/>
  <path d="M10.5 6C10.5 6.82843 9.82843 7.5 9 7.5C8.17157 7.5 7.5 6.82843 7.5 6C7.5 5.17157 8.17157 4.5 9 4.5C9.82843 4.5 10.5 5.17157 10.5 6Z" fill="#E9F0F4" stroke="#004D42" stroke-width="1.5"/>
  <path d="M10.5 12C10.5 12.8284 9.82843 13.5 9 13.5C8.17157 13.5 7.5 12.8284 7.5 12C7.5 11.1716 8.17157 10.5 9 10.5C9.82843 10.5 10.5 11.1716 10.5 12Z" fill="#E9F0F4" stroke="#004D42" stroke-width="1.5"/>
  <path d="M9 16.5L9 21.5" stroke="#004D42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4 7.5L2.95617 6.62348C1.64147 5.5195 0.984127 4.96751 1.00029 4.46618C1.00686 4.26236 1.07264 4.06553 1.18881 3.90207C1.47455 3.5 2.31637 3.5 4 3.5" stroke="#004D42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14 7.5L15.0438 6.62348C16.3585 5.5195 17.0159 4.96751 16.9997 4.46618C16.9931 4.26236 16.9274 4.06553 16.8112 3.90207C16.5254 3.5 15.6836 3.5 14 3.5" stroke="#004D42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14 14.5L15.0438 13.6235C16.3585 12.5195 17.0159 11.9675 16.9997 11.4662C16.9931 11.2624 16.9274 11.0655 16.8112 10.9021C16.5254 10.5 15.6836 10.5 14 10.5" stroke="#004D42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4 14.5L2.95617 13.6235C1.64147 12.5195 0.984127 11.9675 1.00029 11.4662C1.00686 11.2624 1.07264 11.0655 1.18881 10.9021C1.47455 10.5 2.31637 10.5 4 10.5" stroke="#004D42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const PedestrianIcon = ({color,style}) => {

    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
  <path d="M14 3C14 3.82843 13.3284 4.5 12.5 4.5C11.6716 4.5 11 3.82843 11 3C11 2.17157 11.6716 1.5 12.5 1.5C13.3284 1.5 14 2.17157 14 3Z" fill="#798AA3" stroke="#2E3748" stroke-width="1.5"/>
  <path d="M9.86984 6.49707C9.54439 6.49702 9.21863 6.4978 9 6.50038L7.7309 8.45858C7.03316 9.53519 6.68429 10.0735 6.67069 10.6387C6.66463 10.8904 6.70617 11.1411 6.79313 11.3774C6.98834 11.908 7.49223 12.3049 8.5 13.0989L12 7.77645C11.8878 7.69228 11.7664 7.56574 11.6482 7.42451C11.2356 6.93158 11.0293 6.68512 10.8282 6.59116C10.6271 6.4972 10.3747 6.49716 9.86984 6.49707Z" fill="#798AA3"/>
  <path d="M12 19.4998L11.3359 16.8839C11.1161 16.0181 10.6615 15.2274 10.0207 14.5964L8.5 13.0989M3 9.65244C4 7.68269 5.53767 6.54132 9 6.50038M9 6.50038C9.21863 6.4978 9.54439 6.49702 9.86984 6.49707C10.3747 6.49716 10.6271 6.4972 10.8282 6.59116C11.0293 6.68512 11.2356 6.93158 11.6482 7.42451C11.7664 7.56574 11.8878 7.69228 12 7.77645M9 6.50038L7.7309 8.45858C7.03316 9.53519 6.68429 10.0735 6.67069 10.6387C6.66463 10.8904 6.70617 11.1411 6.79313 11.3774C6.98834 11.908 7.49223 12.3049 8.5 13.0989M12 7.77645C13.1547 8.64236 14.9627 8.9911 17 6.69815M12 7.77645L8.5 13.0989" stroke="#2E3748" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1 16.2303L1.67822 16.3916C3.40663 16.8028 5.20324 16.0164 6 14.5" stroke="#2E3748" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const BoundaryIcon = ({color,style}) => {

    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
  <path d="M8.99811 6.5H7.00189C4.13196 6.5 2.19701 9.56909 3.32753 12.328C3.48501 12.7124 3.84633 12.9615 4.24612 12.9615H4.9491C5.18605 12.9615 5.39259 13.1302 5.45006 13.3706L6.35505 17.1567C6.54376 17.9462 7.22196 18.5 8 18.5C8.77804 18.5 9.45624 17.9462 9.64495 17.1567L10.5499 13.3706C10.6074 13.1302 10.814 12.9615 11.0509 12.9615H11.7539C12.1537 12.9615 12.515 12.7124 12.6725 12.328C13.803 9.56909 11.868 6.5 8.99811 6.5Z" fill="#6ACE13" stroke="#449C0A" stroke-width="1.5"/>
  <path d="M10.5 4C10.5 5.38071 9.38071 6.5 8 6.5C6.61929 6.5 5.5 5.38071 5.5 4C5.5 2.61929 6.61929 1.5 8 1.5C9.38071 1.5 10.5 2.61929 10.5 4Z" fill="#6ACE13" stroke="#449C0A" stroke-width="1.5"/>
  <path d="M15 18.5C15 20.1569 11.866 21.5 8 21.5C4.13401 21.5 1 20.1569 1 18.5" stroke="#449C0A" stroke-width="1.5" stroke-linecap="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}


export const Dwibble = ({color,style}) => {

    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="208" height="250" viewBox="0 0 208 127" fill="none">
  <path d="M1.23206 162.781C18.4303 145.355 28.4257 155.22 45.6239 137.795C62.8222 120.369 52.8268 110.504 70.02 93.0832C87.2133 75.6625 97.2137 85.5224 114.412 68.0966C131.61 50.6708 121.615 40.8059 138.813 23.3802C156.011 5.95441 166.007 15.8193 183.21 -1.61147C200.413 -19.0422 190.413 -28.9021 207.611 -46.3279" stroke="url(#paint0_linear_1053_4827)" stroke-opacity="0.25" stroke-miterlimit="10"/>
  <defs>
    <linearGradient id="paint0_linear_1053_4827" x1="104.421" y1="58.2267" x2="114.417" y2="68.0916" gradientUnits="userSpaceOnUse">
      <stop stop-color="#455068"/>
      <stop offset="1" stop-color="#D3DFE7"/>
    </linearGradient>
  </defs>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const PlusIcon = ({color,style}) => {

    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M7 1.66699V12.3337" stroke="#002520" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1.66666 7H12.3333" stroke="#002520" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const ClockIcon = ({color,style}) => {

    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
  <circle cx="7" cy="8.66602" r="6" stroke="#FBFCFE" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M7 6.33301V8.99967L8.33333 10.333" stroke="#FBFCFE" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7 2.33301V1.33301" stroke="#FBFCFE" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.66669 1.33301H8.33335" stroke="#FBFCFE" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const WalletIcon = ({color,style}) => {
 const mycolor = color || "#FBFCFE"
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
  <path d="M13.335 9.75C13.335 10.4404 13.8946 11 14.585 11C15.2753 11 15.835 10.4404 15.835 9.75C15.835 9.05964 15.2753 8.5 14.585 8.5C13.8946 8.5 13.335 9.05964 13.335 9.75Z" stroke=${mycolor} stroke-width="1.5"/>
  <path d="M1.66827 7.66667C1.66827 4.52397 1.66827 2.95262 2.64458 1.97631C3.6209 1 5.19224 1 8.33494 1H11.6683C12.4433 1 12.8307 1 13.1487 1.08519C14.0114 1.31635 14.6853 1.99022 14.9164 2.85295C15.0016 3.17087 15.0016 3.55836 15.0016 4.33333M8.33494 4.33333H13.3349C15.692 4.33333 16.8705 4.33333 17.6027 5.06557C18.3349 5.7978 18.3349 6.97631 18.3349 9.33333V11C18.3349 13.357 18.3349 14.5355 17.6027 15.2678C16.8705 16 15.692 16 13.3349 16H10.4171" stroke=${mycolor} stroke-width="1.5" stroke-linecap="round"/>
  <path d="M8.33335 12.6663H5.00002M5.00002 12.6663H1.66669M5.00002 12.6663V15.9997M5.00002 12.6663L5.00002 9.33301" stroke=${mycolor} stroke-width="1.5" stroke-linecap="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const WalletTabIcon = ({color,style}) => {
 const mycolor = color || "#5D6C87"
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
  <path d="M6.66666 6.24324C6.25244 6.24324 5.91666 6.57902 5.91666 6.99324C5.91666 7.40745 6.25244 7.74324 6.66666 7.74324V6.24324ZM20.788 20.1209L20.2575 19.5907L20.788 20.1209ZM2.83823 4.16344L3.36869 4.69365L3.36869 4.69365L2.83823 4.16344ZM7.66666 3V2.24992L7.6558 2.25008L7.66666 3ZM9.66666 3L10.2663 3.45043L11.168 2.25H9.66666V3ZM21.6667 12.9961H20.9167V14.9971H21.6667H22.4167V12.9961H21.6667ZM15.6667 21V20.25H9.66666V21V21.75H15.6667V21ZM1.66666 12.9961H2.41666V10.9952H1.66666H0.916656V12.9961H1.66666ZM9.66666 21V20.25C7.75983 20.25 6.40519 20.2484 5.37755 20.1102C4.37153 19.9749 3.79191 19.7211 3.36869 19.2977L2.83823 19.8279L2.30777 20.3581C3.05612 21.1068 4.0051 21.4391 5.17759 21.5968C6.32846 21.7516 7.80225 21.75 9.66666 21.75V21ZM1.66666 12.9961H0.916656C0.916656 14.8615 0.915065 16.3359 1.06978 17.4872C1.2274 18.6601 1.55947 19.6094 2.30777 20.3581L2.83823 19.8279L3.36869 19.2977C2.94541 18.8742 2.6917 18.2941 2.55642 17.2875C2.41825 16.2592 2.41666 14.9039 2.41666 12.9961H1.66666ZM21.6667 14.9971H20.9167C20.9167 16.4332 20.9151 17.4348 20.8135 18.1906C20.7148 18.9249 20.5343 19.3137 20.2575 19.5907L20.788 20.1209L21.3184 20.6511C21.9203 20.049 22.1791 19.2908 22.3001 18.3904C22.4182 17.5115 22.4167 16.3908 22.4167 14.9971H21.6667ZM15.6667 21V21.75C17.0597 21.75 18.1799 21.7516 19.0585 21.6334C19.9586 21.5123 20.7165 21.2533 21.3184 20.6511L20.788 20.1209L20.2575 19.5907C19.9807 19.8676 19.5922 20.0481 18.8585 20.1468C18.1032 20.2484 17.1021 20.25 15.6667 20.25V21ZM21.6667 12.9961H22.4167C22.4167 11.6024 22.4182 10.4817 22.3001 9.60284C22.1791 8.70241 21.9203 7.94428 21.3184 7.34214L20.788 7.87234L20.2575 8.40254C20.5343 8.6795 20.7148 9.06838 20.8135 9.80262C20.9151 10.5584 20.9167 11.56 20.9167 12.9961H21.6667ZM15.6667 6.99324V7.74324C17.1021 7.74324 18.1032 7.74483 18.8585 7.84643C19.5922 7.94512 19.9807 8.12563 20.2575 8.40254L20.788 7.87234L21.3184 7.34214C20.7165 6.73995 19.9586 6.4809 19.0585 6.35982C18.1799 6.24164 17.0597 6.24324 15.6667 6.24324V6.99324ZM1.66666 10.9952H2.41666C2.41666 9.08745 2.41825 7.73207 2.55642 6.70385C2.6917 5.69717 2.94541 5.11712 3.36869 4.69365L2.83823 4.16344L2.30777 3.63324C1.55947 4.3819 1.2274 5.33119 1.06978 6.50407C0.915065 7.65542 0.916656 9.12983 0.916656 10.9952H1.66666ZM7.66666 3L7.6558 2.25008C5.22831 2.28521 3.49801 2.44243 2.30777 3.63324L2.83823 4.16344L3.36869 4.69365C4.06462 3.99738 5.14587 3.78656 7.67751 3.74992L7.66666 3ZM7.66666 3V3.75H9.66666V3V2.25H7.66666V3ZM18.6667 6H19.4167C19.4167 2.82436 16.8423 0.25 13.6667 0.25V1V1.75C16.0139 1.75 17.9167 3.65279 17.9167 6H18.6667ZM13.6667 1V0.25C10.491 0.25 7.91666 2.82436 7.91666 6H8.66666H9.41666C9.41666 3.65279 11.3194 1.75 13.6667 1.75V1ZM18.5666 7L19.3016 7.1492C19.3771 6.77726 19.4167 6.39286 19.4167 6H18.6667H17.9167C17.9167 6.29208 17.8873 6.57652 17.8316 6.8508L18.5666 7ZM9.66666 3L9.06698 2.54957C8.34519 3.51051 7.91666 4.70625 7.91666 6H8.66666H9.41666C9.41666 5.04254 9.73274 4.16081 10.2663 3.45043L9.66666 3ZM8.66666 6H7.91666C7.91666 6.39012 7.95562 6.7719 8.03009 7.14142L8.76531 6.99324L9.50052 6.84506C9.4456 6.57255 9.41666 6.29004 9.41666 6H8.66666ZM8.76531 6.99324V7.74324H15.6667V6.99324V6.24324H8.76531V6.99324ZM8.76531 6.99324L8.03009 7.14142C8.03062 7.14405 8.03115 7.14665 8.03167 7.1492L8.76667 7L9.50168 6.8508C9.50129 6.84884 9.5009 6.84693 9.50052 6.84506L8.76531 6.99324ZM6.66666 6.99324V7.74324H8.76531V6.99324V6.24324H6.66666V6.99324Z" fill=${mycolor}/>
  <path d="M15.6667 13C15.6667 13.8284 16.3382 14.5 17.1667 14.5C17.9951 14.5 18.6667 13.8284 18.6667 13C18.6667 12.1716 17.9951 11.5 17.1667 11.5C16.3382 11.5 15.6667 12.1716 15.6667 13Z" stroke=${mycolor} stroke-width="1.5"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const LockIcon = ({color,style}) => {
 const mycolor = color || "#5D6C87"
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
  <path d="M0.845166 12.5632C0.995086 13.6767 1.91738 14.549 3.03973 14.6006C3.98414 14.644 4.94349 14.6667 5.99996 14.6667C7.05642 14.6667 8.01578 14.644 8.96019 14.6006C10.0825 14.549 11.0048 13.6767 11.1548 12.5632C11.2526 11.8365 11.3333 11.0917 11.3333 10.3333C11.3333 9.57492 11.2526 8.83021 11.1548 8.1035C11.0048 6.99001 10.0825 6.11766 8.96019 6.06606C8.01578 6.02265 7.05642 6 5.99996 6C4.94349 6 3.98414 6.02265 3.03973 6.06606C1.91738 6.11766 0.995085 6.99001 0.845165 8.1035C0.747322 8.83021 0.666625 9.57492 0.666625 10.3333C0.666625 11.0917 0.747322 11.8365 0.845166 12.5632Z" stroke="#5D6C87" stroke-width="1.2"/>
  <path d="M6 11.0003V9.66699" stroke="#5D6C87" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M3 5.99967V4.33301C3 2.67615 4.34315 1.33301 6 1.33301C7.65685 1.33301 9 2.67615 9 4.33301V5.99967" stroke="#5D6C87" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}

export const FireIcon = ({color,style}) => {
 const mycolor = color || "#5D6C87"
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
  <path d="M7.2373 13.6668C15.3854 11.6668 10.8225 3.66683 5.28175 0.333496C4.63012 2.66683 3.65217 3.3335 1.69656 5.66683C-0.892605 8.75609 0.392919 12.3335 3.97804 13.6668C3.43485 13.0002 2.03297 11.6007 2.99992 9.66683C3.33325 9.00016 3.99992 8.3335 3.66659 7.00016C4.31844 7.3335 5.66659 7.66683 5.99992 9.3335C6.54309 8.66683 7.10688 7.26683 6.58545 5.66683C10.6666 8.66683 8.99992 11.6668 7.2373 13.6668Z" fill="#FBFCFE"/>
</svg>`
    return(
        <SvgXml xml={xml} style={style} />
    )
}
