// add custom Google font to your application
import { Inter, Lusitana } from 'next/font/google';
 
// primary font
export const inter = Inter({ subsets: ['latin'] });
// secondary font
export const lusitana = Lusitana({ 
    subsets: ['latin'], 
    weight: ['400', '700']
});