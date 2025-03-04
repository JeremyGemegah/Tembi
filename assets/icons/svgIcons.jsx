import Svg,{ Path, Circle, SvgXml } from "react-native-svg"

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