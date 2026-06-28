

interface SignedInProps{
    // To show transactions and current balance 
}


export function SignedInScreen({} : SignedInProps){

    return (
        <div className="min-h-screen bg-background p-6">
            <h1 className="text-primary">Current balance and transactions</h1> 
        </div>
    )
}