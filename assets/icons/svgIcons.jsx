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
export const Lock = ({style}) => {
     const xml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
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
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20.5137 12C20.5137 16.6944 16.7081 20.5 12.0137 20.5C7.31925 20.5 3.51367 16.6944 3.51367 12C3.51367 7.30558 7.31925 3.5 12.0137 3.5C16.7081 3.5 20.5137 7.30558 20.5137 12Z" stroke="#002520" stroke-width="1.5"/>
  <path d="M22.5 12H20.5" stroke="#002520" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.5 12H1.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 1.5L12 3.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 20.5V22.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15 12C15 13.6569 13.6568 15 12 15C10.3431 15 8.99995 13.6569 8.99995 12C8.99995 10.3431 10.3431 9 12 9C13.6568 9 15 10.3431 15 12Z" stroke="#141B34" stroke-width="1.5"/>
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