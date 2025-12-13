'use client'

interface AdBannerProps {
  slot: string
  format?: 'horizontal' | 'vertical' | 'rectangle'
}

export default function AdBanner({ slot, format = 'horizontal' }: AdBannerProps) {
  const getSize = () => {
    switch (format) {
      case 'vertical':
        return 'min-h-[600px] w-[160px]'
      case 'rectangle':
        return 'min-h-[250px] w-full max-w-[300px]'
      default:
        return 'min-h-[90px] w-full'
    }
  }

  return (
    <div className="ad-container my-6">
      <div className={`${getSize()} flex items-center justify-center bg-neutral-100 rounded-lg border border-neutral-200`}>
        {/* 
          Replace this placeholder with actual AdSense code:
          
          <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot={slot}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
          
          Then add this script after the ins element:
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        */}
        <div className="text-center text-neutral-400 text-sm p-4">
          <p className="font-medium">Advertisement</p>
          <p className="text-xs mt-1">Ad Slot: {slot}</p>
        </div>
      </div>
    </div>
  )
}
