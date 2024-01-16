export default function LoggedInLayout({ 
    children,
   }: { 
    children: React.ReactNode
  }) {
    return (
        <>
        <h1>Here we are</h1>
                {children}
        </>      
    )
}