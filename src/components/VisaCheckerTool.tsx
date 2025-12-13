'use client'

import { useState } from 'react'
import { 
  Search, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Calendar, 
  Clock, 
  User,
  FileText,
  Loader2,
  RefreshCw,
  Download,
  Share2
} from 'lucide-react'

type IdType = 'civil_id' | 'passport'
type VisaType = 'work' | 'visit' | 'residence' | 'transit' | 'family'
type VisaStatus = 'valid' | 'expired' | 'expiring_soon' | null

interface VisaResult {
  status: VisaStatus
  visaType: string
  issueDate: string
  expiryDate: string
  daysRemaining: number
  holderName: string
  nationality: string
  civilId: string
}

const visaTypes = [
  { value: 'work', label: 'Work Visa (تأشيرة عمل)' },
  { value: 'visit', label: 'Visit Visa (تأشيرة زيارة)' },
  { value: 'residence', label: 'Residence Permit (إقامة)' },
  { value: 'transit', label: 'Transit Visa (تأشيرة عبور)' },
  { value: 'family', label: 'Family Visa (تأشيرة عائلية)' },
]

const nationalities = [
  'India', 'Philippines', 'Egypt', 'Bangladesh', 'Pakistan', 
  'Sri Lanka', 'Nepal', 'Indonesia', 'Jordan', 'Syria',
  'Lebanon', 'Palestine', 'Yemen', 'Sudan', 'Ethiopia',
  'Other'
]

export default function VisaCheckerTool() {
  const [idType, setIdType] = useState<IdType>('civil_id')
  const [civilId, setCivilId] = useState('')
  const [passportNumber, setPassportNumber] = useState('')
  const [nationality, setNationality] = useState('')
  const [visaType, setVisaType] = useState<VisaType>('work')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<VisaResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  const validateCivilId = (id: string): boolean => {
    // Kuwait Civil ID is 12 digits
    return /^\d{12}$/.test(id)
  }

  const validatePassport = (passport: string): boolean => {
    // Basic passport validation - alphanumeric, 6-12 characters
    return /^[A-Z0-9]{6,12}$/i.test(passport)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setResult(null)

    // Validation
    if (idType === 'civil_id') {
      if (!validateCivilId(civilId)) {
        setError('Please enter a valid 12-digit Kuwait Civil ID number')
        return
      }
    } else {
      if (!validatePassport(passportNumber)) {
        setError('Please enter a valid passport number (6-12 alphanumeric characters)')
        return
      }
      if (!nationality) {
        setError('Please select your nationality')
        return
      }
    }

    setIsLoading(true)

    // Simulate API call - In production, this would call the actual MOI API
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Demo result - Replace with actual API integration
    const demoResult = generateDemoResult()
    setResult(demoResult)
    setIsLoading(false)
  }

  const generateDemoResult = (): VisaResult => {
    // This generates a demo result for demonstration purposes
    // In production, this would be replaced with actual API data
    const today = new Date()
    const randomDays = Math.floor(Math.random() * 365) - 30 // -30 to 335 days
    const expiryDate = new Date(today)
    expiryDate.setDate(expiryDate.getDate() + randomDays)
    
    const issueDate = new Date(expiryDate)
    issueDate.setFullYear(issueDate.getFullYear() - 2)

    let status: VisaStatus = 'valid'
    if (randomDays < 0) {
      status = 'expired'
    } else if (randomDays <= 30) {
      status = 'expiring_soon'
    }

    return {
      status,
      visaType: visaTypes.find(v => v.value === visaType)?.label || 'Work Visa',
      issueDate: issueDate.toLocaleDateString('en-GB'),
      expiryDate: expiryDate.toLocaleDateString('en-GB'),
      daysRemaining: Math.max(0, randomDays),
      holderName: 'DEMO USER',
      nationality: nationality || 'India',
      civilId: civilId || '2XXXXXXXXXXX',
    }
  }

  const resetForm = () => {
    setCivilId('')
    setPassportNumber('')
    setNationality('')
    setVisaType('work')
    setResult(null)
    setError(null)
  }

  const getStatusColor = (status: VisaStatus) => {
    switch (status) {
      case 'valid':
        return 'bg-green-50 border-green-200 text-green-800'
      case 'expired':
        return 'bg-red-50 border-red-200 text-red-800'
      case 'expiring_soon':
        return 'bg-amber-50 border-amber-200 text-amber-800'
      default:
        return 'bg-neutral-50 border-neutral-200 text-neutral-800'
    }
  }

  const getStatusIcon = (status: VisaStatus) => {
    switch (status) {
      case 'valid':
        return <CheckCircle className="w-8 h-8 text-green-500" />
      case 'expired':
        return <XCircle className="w-8 h-8 text-red-500" />
      case 'expiring_soon':
        return <AlertTriangle className="w-8 h-8 text-amber-500" />
      default:
        return null
    }
  }

  const getStatusText = (status: VisaStatus) => {
    switch (status) {
      case 'valid':
        return 'Valid'
      case 'expired':
        return 'Expired'
      case 'expiring_soon':
        return 'Expiring Soon'
      default:
        return 'Unknown'
    }
  }

  return (
    <div className="card">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">
          Check Your Visa Status
        </h2>
        <p className="text-neutral-600">
          Enter your details below to check your Kuwait visa validity
        </p>
      </div>

      {!result ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* ID Type Selection */}
          <div>
            <label className="form-label">Identification Type</label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setIdType('civil_id')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  idType === 'civil_id'
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <User className={`w-6 h-6 mx-auto mb-2 ${idType === 'civil_id' ? 'text-primary-500' : 'text-neutral-400'}`} />
                <span className={`text-sm font-medium ${idType === 'civil_id' ? 'text-primary-700' : 'text-neutral-600'}`}>
                  Civil ID
                </span>
              </button>
              <button
                type="button"
                onClick={() => setIdType('passport')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  idType === 'passport'
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <FileText className={`w-6 h-6 mx-auto mb-2 ${idType === 'passport' ? 'text-primary-500' : 'text-neutral-400'}`} />
                <span className={`text-sm font-medium ${idType === 'passport' ? 'text-primary-700' : 'text-neutral-600'}`}>
                  Passport
                </span>
              </button>
            </div>
          </div>

          {/* Civil ID Input */}
          {idType === 'civil_id' && (
            <div>
              <label htmlFor="civilId" className="form-label">
                Kuwait Civil ID Number
              </label>
              <input
                type="text"
                id="civilId"
                value={civilId}
                onChange={(e) => setCivilId(e.target.value.replace(/\D/g, '').slice(0, 12))}
                placeholder="Enter 12-digit Civil ID"
                className="form-input"
                maxLength={12}
              />
              <p className="text-xs text-neutral-500 mt-1">
                Example: 281234567890
              </p>
            </div>
          )}

          {/* Passport Input */}
          {idType === 'passport' && (
            <>
              <div>
                <label htmlFor="passport" className="form-label">
                  Passport Number
                </label>
                <input
                  type="text"
                  id="passport"
                  value={passportNumber}
                  onChange={(e) => setPassportNumber(e.target.value.toUpperCase().slice(0, 12))}
                  placeholder="Enter passport number"
                  className="form-input"
                  maxLength={12}
                />
              </div>
              <div>
                <label htmlFor="nationality" className="form-label">
                  Nationality
                </label>
                <select
                  id="nationality"
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  className="form-input"
                >
                  <option value="">Select nationality</option>
                  {nationalities.map((nat) => (
                    <option key={nat} value={nat}>{nat}</option>
                  ))}
                </select>
              </div>
            </>
          )}

          {/* Visa Type */}
          <div>
            <label htmlFor="visaType" className="form-label">
              Visa Type
            </label>
            <select
              id="visaType"
              value={visaType}
              onChange={(e) => setVisaType(e.target.value as VisaType)}
              className="form-input"
            >
              {visaTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="btn-primary w-full flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Checking...
              </>
            ) : (
              <>
                <Search className="w-5 h-5 mr-2" />
                Check Visa Status
              </>
            )}
          </button>

          {/* Disclaimer */}
          <p className="text-xs text-neutral-500 text-center">
            By using this tool, you agree to our Terms of Service. This is a helper tool - 
            for official verification, please visit the MOI Kuwait website.
          </p>
        </form>
      ) : (
        /* Results Display */
        <div className="space-y-6">
          {/* Status Banner */}
          <div className={`p-6 rounded-xl border-2 ${getStatusColor(result.status)}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {getStatusIcon(result.status)}
                <div>
                  <h3 className="text-2xl font-bold">
                    Visa Status: {getStatusText(result.status)}
                  </h3>
                  <p className="text-sm opacity-80">
                    {result.status === 'valid' && 'Your visa is currently valid'}
                    {result.status === 'expired' && 'Your visa has expired - please take action'}
                    {result.status === 'expiring_soon' && 'Your visa will expire soon - consider renewal'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-neutral-50 rounded-lg">
              <div className="flex items-center text-neutral-500 text-sm mb-1">
                <FileText className="w-4 h-4 mr-2" />
                Visa Type
              </div>
              <p className="font-semibold text-neutral-900">{result.visaType}</p>
            </div>
            
            <div className="p-4 bg-neutral-50 rounded-lg">
              <div className="flex items-center text-neutral-500 text-sm mb-1">
                <User className="w-4 h-4 mr-2" />
                Civil ID
              </div>
              <p className="font-semibold text-neutral-900">{result.civilId}</p>
            </div>
            
            <div className="p-4 bg-neutral-50 rounded-lg">
              <div className="flex items-center text-neutral-500 text-sm mb-1">
                <Calendar className="w-4 h-4 mr-2" />
                Issue Date
              </div>
              <p className="font-semibold text-neutral-900">{result.issueDate}</p>
            </div>
            
            <div className="p-4 bg-neutral-50 rounded-lg">
              <div className="flex items-center text-neutral-500 text-sm mb-1">
                <Calendar className="w-4 h-4 mr-2" />
                Expiry Date
              </div>
              <p className="font-semibold text-neutral-900">{result.expiryDate}</p>
            </div>
            
            <div className="p-4 bg-neutral-50 rounded-lg md:col-span-2">
              <div className="flex items-center text-neutral-500 text-sm mb-1">
                <Clock className="w-4 h-4 mr-2" />
                Days Remaining
              </div>
              <p className="text-3xl font-bold text-primary-600">
                {result.daysRemaining} days
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={resetForm}
              className="btn-primary flex-1 flex items-center justify-center"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Check Another Visa
            </button>
            <button
              onClick={() => window.print()}
              className="btn-secondary flex-1 flex items-center justify-center"
            >
              <Download className="w-5 h-5 mr-2" />
              Print Results
            </button>
          </div>

          {/* Recommendations */}
          {result.status === 'expiring_soon' && (
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <h4 className="font-semibold text-amber-900 mb-2">Recommended Actions:</h4>
              <ul className="text-sm text-amber-800 space-y-1">
                <li>• Start your visa renewal process immediately</li>
                <li>• Gather required documents (passport, photos, medical certificate)</li>
                <li>• Contact your employer/sponsor for renewal assistance</li>
                <li>• Visit the MOI Kuwait website for online renewal options</li>
              </ul>
            </div>
          )}

          {result.status === 'expired' && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <h4 className="font-semibold text-red-900 mb-2">Urgent Actions Required:</h4>
              <ul className="text-sm text-red-800 space-y-1">
                <li>• Contact the Ministry of Interior immediately</li>
                <li>• You may be subject to overstay fines</li>
                <li>• Consult with your employer/sponsor about next steps</li>
                <li>• Consider seeking legal advice if needed</li>
              </ul>
            </div>
          )}

          {/* Disclaimer */}
          <p className="text-xs text-neutral-500 text-center">
            This is a demonstration result. For official visa status verification, 
            please visit the Ministry of Interior Kuwait official website at moi.gov.kw
          </p>
        </div>
      )}
    </div>
  )
}
