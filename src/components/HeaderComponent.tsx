


export function HeaderComponent(){


    return (
    <header className="bg-background">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt="Company logo"
              src="/bankinglogo.png"
              className="h-12 w-auto"
            />
          </a>
        </div>
      </nav>
    </header>
    )
}