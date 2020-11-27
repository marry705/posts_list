import { Children } from 'react'; 

const findChild = (children, child) => Children.toArray(children).filter(c => c.type === child )[0];

const WhenError = ( { children } ) => Children.only(children);
const WhenLoading = ( { children } ) => Children.only(children);
const WhenNoAction = ( { children } ) => Children.only(children);

const Layout = ({ ifLoading = true, ifError = false, children }) => (ifLoading) ? 
    findChild(children, WhenLoading) : (ifError) ?   
      findChild(children, WhenError) :
      findChild(children, WhenNoAction) ;

export { Layout, WhenError, WhenLoading, WhenNoAction };