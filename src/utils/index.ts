export function phoneNumberMask (str?: string): string {
   if(str){
      if(str.length === 11){ 
         // 92 9 8841-0440
         return `+(55) ${str.slice(0,2)} ${str.slice(2,3)} ${str.slice(3,7)}-${str.slice(7,11)}`;
      }
      // 92 8841-0440
      return `+(55) ${str.slice(0,2)} ${str.slice(2,6)}-${str.slice(6,10)}`
   }
   return '';
}