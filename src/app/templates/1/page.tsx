import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function LegalForms() {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'V', 'W']
  
  const documentsA = [
    { title: 'Accord de confidentialité', href: '#' },   
    { title: 'Accord de séparation', href: '#' },    
    { title: 'Affidavit', href: '#' },
    { title: 'Amortization Schedule', href: '#' },
    { title: 'Assignment', href: '#' },
  ]

  const documentsB = [
    { title: 'Bail Commercial', href: '#' },   
    { title: 'Bill of Sale', href: '#' }, 
    { title: 'Business Plan', href: '#' },    
  ]

  const documentsC = [
    { title: 'Child Care Contract', href: '#' },   
    { title: 'Company Articles', href: '#' }, 
    { title: 'Complaint Letter', href: '#' },
    { title: 'Cover Letter', href: '#' },    
  ]

  const documentsD = [
    { title: 'Demand Letter', href: '#' },   
    { title: 'Digital Image License', href: '#' }, 
    { title: 'Discharge of Mortgage', href: '#' },    
  ]

  const documentsE = [
    { title: 'End User License Agreement (EULA)', href: '#' },   
    { title: 'Eviction Notice', href: '#' }, 
    { title: 'Employment Offer Letter', href: '#' },   
    { title: 'Employment Contract', href: '#' },
    { title: 'Etat des lieux', href: '#' },       
  ]

  const documentsF = [
    { title: 'Financial Statement', href: '#' },       
  ]

  const documentsG = [
    { title: 'Gift Deed', href: '#' },       
  ]

  const documentsH = [
    { title: 'Health Care Directive', href: '#' },
    { title: 'Hold-Harmless (Indemnity) Agreement', href: '#' },       
  ]

  const documentsI = [
    { title: 'Incorporation Package', href: '#' },   
    { title: 'Independant Contractor Agreement', href: '#' }, 
    { title: 'Invoice Form', href: '#' },   
  ]

  const documentsJ = [
    { title: 'Joint Venture Agreement', href: '#' },   
    { title: 'Just-in-Case Instructions', href: '#' }, 
  ]

  const documentsL = [
    { title: 'Landlord Consent to Lease', href: '#' },   
    { title: 'Letter of Intent', href: '#' }, 
    { title: 'Living Will', href: '#' },   
    { title: 'Last Will and Testament', href: '#' },
    { title: 'Loan Agreement', href: '#' },       
    { title: 'Lease Addendum', href: '#' },       
  ]

  const documentsM = [
    { title: 'Mandat de protection', href: '#' },    
    { title: 'Medical Power of Attorney', href: '#' },
    { title: 'Memorandum of Understanding', href: '#' },
    { title: 'Minute Book', href: '#' },
    { title: 'Minute Book Rights of Inspection', href: '#' },
    { title: "Minutes of Directors' Meeting", href: '#' },
    { title: "Minutes of Shareholders' Meeting", href: '#' },
  ]

  const documentsN = [
    { title: 'Non-Complete Agreement', href: '#' },   
    { title: 'Non-Disclosure Agreement', href: '#' }, 
    { title: 'Notice of Termination', href: '#' },   
    { title: 'Notice to Enter', href: '#' },
    { title: 'Notice to Quit', href: '#' },       
  ]

  const documentsO = [
    { title: 'Offer to Lease', href: '#' },   
    { title: 'Offer to Purchase Real Estate', href: '#' }, 
  ]

  const documentsP = [
    { title: 'Partnership Agreement', href: '#' },   
    { title: 'Partnership Amendment', href: '#' }, 
    { title: 'Performance Agreement', href: '#' },   
    { title: 'Procuration', href: '#' },
    { title: 'Purchase Order', href: '#' },       
  ]

  const documentsR = [
    { title: 'Real Estate Purchase Agreement', href: '#' }, 
    { title: 'Residential Rental/Lease Agreement', href: '#' },   
    { title: 'Rent Receipt', href: '#' }, 
    { title: 'Resume', href: '#' },   
    { title: 'Resignation Letter', href: '#' },
    { title: 'Reference List', href: '#' },       
  ]

  const documentsS = [
    { title: 'Sales Agreement', href: '#' },   
    { title: 'Shareholder Proxy', href: '#' }, 
    { title: 'SWOT Analysis', href: '#' },   
    { title: 'Share Certificates', href: '#' },
    { title: 'Share Purchase Agreement', href: '#' },       
  ]

  const documentsT = [
    { title: 'Termination Agreement', href: '#' },   
    { title: 'Termination by Tenant', href: '#' }, 
    { title: 'Testament', href: '#' },   
    { title: 'Trademark Assignment', href: '#' },      
  ]

  const documentsV = [
    { title: 'Vehicle Leasing Agreement', href: '#' },   
  ]

  const documentsW = [
    { title: 'Website Privacy Policy', href: '#' },   
    { title: 'Website Terms and Conditions', href: '#' }, 
    { title: 'Will', href: '#' },   
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="flex">
        {/* Left sidebar with image */}
        <div className="hidden lg:block w-64 p-4">
          <Image
            src="/logo2.png"
            alt="Legal Forms"
            width={200}
            height={200}
            className="w-full rounded-lg shadow-sm"
          />
        </div>

        {/* Main content */}
        <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Legal Forms & Legal Documents
              </h1>
              <p className="text-xl text-gray-600">
                Answer a few simple questions - download and print instantly
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <div className="flex gap-2">
                <Input
                  type="search"
                  placeholder="Search All Documents..."
                  className="flex-1"
                />
                <Button className="bg-[#8BC34A] hover:bg-[#7CB342] text-white px-8">
                  SEARCH
                </Button>
              </div>
            </div>

            <div className="flex justify-center gap-4 flex-wrap mb-12">
              {alphabet.map((letter) => (
                <Link
                  key={letter}
                  href={`#${letter}`}
                  className="text-[#8BC34A] hover:text-[#7CB342] font-medium"
                >
                  {letter}
                </Link>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h2 id="A" className="text-2xl font-semibold text-gray-900 mb-4">A</h2>
                <ul className="space-y-3">
                  {documentsA.map((doc) => (
                    <li key={doc.title}>
                      <Link
                        href={doc.href}
                        className="text-[#8BC34A] hover:text-[#7CB342] hover:underline"
                      >
                        {doc.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 id="M" className="text-2xl font-semibold text-gray-900 mb-4">M</h2>
                <ul className="space-y-3">
                  {documentsM.map((doc) => (
                    <li key={doc.title}>
                      <Link
                        href={doc.href}
                        className="text-[#8BC34A] hover:text-[#7CB342] hover:underline"
                      >
                        {doc.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

