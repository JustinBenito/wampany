/* global paypal */
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

function App() {
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)

  const openPaymentModal = (plan) => {
    setSelectedPlan(plan)
    setShowPaymentModal(true)
  }

  const closePaymentModal = () => {
    // Hide all PayPal buttons when closing modal
    const allPaypalButtons = document.querySelectorAll('[id^="paypal-container-"]')
    allPaypalButtons.forEach(button => {
      button.style.display = 'none'
    })
    
    setShowPaymentModal(false)
    setSelectedPlan(null)
  }

  return (
    <div className="min-h-screen relative">
      {/* Watercolor background with gradient ellipses */}
      <div className="fixed inset-0 bg-gradient-to-br from-stone-50 via-slate-50 to-neutral-50">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-radial from-pink-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-radial from-purple-200/25 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-40 w-72 h-72 bg-gradient-radial from-blue-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-radial from-rose-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-violet-200/20 to-transparent rounded-full blur-3xl"></div>
        
        {/* Pink Aurora Borealis Background - Behind Everything */}

      </div>
      
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <MarqueeSection />
        <div className="bg-gradient-to-b from-transparent via-stone-100/50 to-transparent">
          <OurStorySection />
          <PricingSection openPaymentModal={openPaymentModal} />
          <Footer />
        </div>
      </div>
      
      {showPaymentModal && (
        <PaymentModal 
          plan={selectedPlan} 
          onClose={closePaymentModal} 
        />
      )}
    </div>
  )
}

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute top-0 left-0 right-0 z-20 p-6 w-full flex justify-between items-center"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="text-black text-xl font-semibold"
      >
        wampany.com
      </motion.div>

      <motion.a 
        href="mailto:hello@wampany.com"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 bg-white/40 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-white/50 hover:bg-white/60 transition-all duration-200 shadow-lg"
      >
        Contact
      </motion.a>
    </motion.header>
  )
}

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative text-center py-32 px-6 min-h-screen flex items-center justify-center"
    >
      {/* Grid pattern with cursor reveal */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.3) 0px, rgba(0,0,0,0.15) 120px, transparent 200px), radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      {/* Bright vibrant gradient ellipses with noise */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: `
              url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter1'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter1)' opacity='0.3'/%3E%3C/svg%3E"),
              linear-gradient(135deg, rgba(255, 165, 0, 0.9) 0%, rgba(255, 192, 203, 0.8) 50%, rgba(30, 144, 255, 0.85) 100%)
            `,
            filter: 'blur(60px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full"
          style={{
            background: `
              url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter2)' opacity='0.3'/%3E%3C/svg%3E"),
              linear-gradient(225deg, rgba(255, 255, 0, 0.85) 0%, rgba(255, 165, 0, 0.8) 50%, rgba(255, 20, 147, 0.9) 100%)
            `,
            filter: 'blur(50px)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full"
          style={{
            background: `
              url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter3'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter3)' opacity='0.3'/%3E%3C/svg%3E"),
              linear-gradient(45deg, rgba(30, 144, 255, 0.9) 0%, rgba(255, 255, 0, 0.75) 50%, rgba(255, 165, 0, 0.85) 100%)
            `,
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 270, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full"
          style={{
            background: `
              url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter4'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter4)' opacity='0.3'/%3E%3C/svg%3E"),
              linear-gradient(315deg, rgba(255, 20, 147, 0.85) 0%, rgba(30, 144, 255, 0.8) 50%, rgba(255, 255, 0, 0.9) 100%)
            `,
            filter: 'blur(35px)',
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [180, 360, 180],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Additional bright accent gradient */}
        <motion.div 
          className="absolute top-1/2 left-1/2 w-52 h-52 rounded-full"
          style={{
            background: `
              url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter5'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter5)' opacity='0.3'/%3E%3C/svg%3E"),
              linear-gradient(90deg, rgba(255, 165, 0, 0.85) 0%, rgba(255, 255, 0, 0.8) 50%, rgba(255, 192, 203, 0.9) 100%)
            `,
            filter: 'blur(45px)',
          }}
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Main content */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative  px-20 z-10"
      >
        <motion.div
          className="mx-auto mb-12"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.3 }}
        >
          <h1 className="text-7xl sm:text-8xl md:text-9xl leading-12 sm:leading-15 md:leading-30 lg:text-[12rem] font-light mb-4 text-gray-900 font-['Bricolage_Grotesque']">
            <motion.span 
              className="italic block text-left text-7xl md:text-8xl font-['Instrument_Serif']"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              the
            </motion.span>
            <motion.span 
              className="font-bold block"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Wallpaper
            </motion.span>
            <motion.span 
              className="font-light text-right text-5xl block font-['Inter']"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              company
            </motion.span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-gray-600 text-xl md:text-2xl font-light font-['Bricolage_Grotesque'] max-w-2xl mx-auto"
        >
          generate stunning wallpapers for your company
        </motion.p>
      </motion.div>
    </motion.section>
  )
}

const MarqueeSection = () => {
  // Distribute 9 images across 3 sliders (3 images per slider)
  const sliderImages = [
    // Slider 1: images 1, 2, 3
    ['/wampany/1.png', '/wampany/2.png', '/wampany/3.png', '/wampany/10.png'],
    // Slider 2: images 4, 5, 6
    ['/wampany/4.png', '/wampany/5.png', '/wampany/6.png', '/wampany/11.png'],
    // Slider 3: images 7, 8, 9
    ['/wampany/7.png', '/wampany/8.png', '/wampany/9.png']
  ];

  const createImageCards = (sliderIndex, count = 5) => {
    const images = sliderImages[sliderIndex];
    
    return Array.from({ length: count }, (_, i) => {
      // Use all available images, then show "Your Company ?" for remaining slots
      const isRealImage = i < images.length;
      const currentImage = isRealImage ? images[i] : null;
      
      return (
        <motion.div
          key={i}
          className="h-32 w-48 md:h-40 md:w-60 lg:h-48 lg:w-72 mx-4 flex-shrink-0 rounded-2xl shadow-2xl border-4 border-white/60 backdrop-blur-sm overflow-hidden relative group cursor-pointer"
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            boxShadow: '0 20px 40px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.6)'
          }}
        >
          {isRealImage ? (
            <img
              src={currentImage}
              alt={`Wallpaper ${i + 1}`}
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <span className="text-white text-xl md:text-2xl font-['Bricolage_Grotesque'] font-bold text-center">
                Your Company ?
              </span>
            </div>
          )}
        </motion.div>
      )
    })
  }

  const CustomMarquee = ({ children, direction = 'left', duration = 25 }) => {
    return (
      <div className="flex overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: direction === 'left' ? [0, -1920] : [-1920, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: duration,
              ease: "linear",
            },
          }}
          style={{ width: 'max-content' }}
        >
          {children}
          {children} {/* Duplicate for seamless loop */}
        </motion.div>
      </div>
    )
  }

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 overflow-hidden"
    >
      {/* First row - moving left - using images 1, 2, 3 */}
      <div className="mb-8">
        <CustomMarquee direction="left" duration={30}>
          {createImageCards(0)}
        </CustomMarquee>
      </div>
      
      {/* Second row - moving right - using images 4, 5, 6 */}
      <div className="mb-8">
        <CustomMarquee direction="right" duration={25}>
          {createImageCards(1)}
        </CustomMarquee>
      </div>
      
      {/* Third row - moving left - using images 7, 8, 9 */}
      <div className="mb-8">
        <CustomMarquee direction="left" duration={35}>
          {createImageCards(2)}
        </CustomMarquee>
      </div>
    </motion.section>
  )
}

const OurStorySection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-24 px-6 text-center max-w-5xl mx-auto"
    >
      <motion.h2 
        className="text-5xl md:text-6xl font-bold mb-16 text-gray-900 font-['Bricolage_Grotesque']"
        initial={{ scale: 0.9, y: 30 }}
        whileInView={{ scale: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
        viewport={{ once: true }}
      >
        Our Story
      </motion.h2>
      <motion.div 
        className="text-gray-700 text-xl max-w-4xl mx-auto font-['Bricolage_Grotesque'] font-light"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.p 
          className="mb-8 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          We as brothers love designing wallpapers for ourselves. <br /> We get peace of mind when we see our wallpapers are refreshed often and have a fresh outlook.
        </motion.p>
        <motion.p 
          className="mb-8 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          We figured, building something around wallpapers would be the best way for us to capitalize on our love for unique wallpapers
        </motion.p>
        <motion.p 
          className="mb-8 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Going to school and having fun was boring, so we jumped into Entrepreneurship and have decided to sell Wallpapers to amazing people like you. 
        </motion.p>
        <motion.p 
          className="leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
   {"Hope you like it <3"}
        </motion.p>
      </motion.div>
    </motion.section>
  )
}

const PricingSection = ({ openPaymentModal }) => {
  const plans = [
    {
      name: 'STARTER',
      price: 4.99,
      description: 'Perfect for solopreneurs',
      features: [
        '4 custom wallpapers delivered',
        'High-quality resolution',
        '0 revisions included',
        '3-4 days delivery time',
        'Phone & Desktop version',
      ],
      highlighted: false,
      buttonText: 'Get Wallpapers'
    },
    {
      name: 'STARTUP',
      price: 8.99,
      description: 'Most popular choice for startups with a small team',
      features: [
        '10 custom wallpapers delivered',
        'Premium 4K resolution',
        '5 revisions included',
        '2-3 days delivery time',
        'Phone & Desktop version'
      ],
      highlighted: true,
      buttonText: 'Get Wallpapers'
    },
    {
      name: 'PREMIUM',
      price: 18.99,
      description: 'Best for big teams & startups',
      features: [
        '20 custom wallpapers delivered',
        'Premium 4k resolution',
        '10 revisions included',
        '24 hours delivery time',
        'Priority Support',
      ],
      highlighted: false,
      buttonText: 'Get Wallpapers'
    }
  ]

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="py-24 px-6"
    >
      <motion.h2 
        className="text-5xl  md:text-6xl font-bold text-center mb-40 text-gray-900 font-['Bricolage_Grotesque']"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
        viewport={{ once: true }}
      >
        Pricing
      </motion.h2>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -20, 
              scale: 1.05,
              transition: { duration: 0.4, type: "easeInOut", bounce: 0.1 }
            }}
            className={`relative p-8 rounded-3xl backdrop-blur-sm border font-['Bricolage_Grotesque'] ${
              plan.highlighted 
                ? 'bg-gradient-to-br from-pink-500 via-pink-300 to-pink-100 text-white border-white/30 shadow-2xl transform scale-105 md:scale-110' 
                : 'bg-white/60 text-gray-900 border-white/60 shadow-xl'
            } ${plan.highlighted ? 'md:mt-[-2rem] md:mb-[-2rem]' : ''}`}
          >
            {plan.highlighted && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 border-2 bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
            )}
            
            <div className="text-center mb-8">
              <h3 className="text-sm font-bold tracking-widest mb-3 opacity-80">{plan.name}</h3>
              <p className="text-sm opacity-80 mb-6 leading-relaxed">{plan.description}</p>
              <div className="mb-8">
                <span className="text-5xl font-bold">${plan.price}</span>
                <span className="text-sm opacity-80 ml-2 block mt-1">one-time payment</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-10">
              {plan.features.map((feature, idx) => (
                <motion.li 
                  key={idx} 
                  className="flex items-center text-sm"
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.05 * idx }}
                  viewport={{ once: true }}
                >
                  <span className={`w-3 h-3 rounded-full mr-4 flex-shrink-0 ${
                    plan.highlighted ? 'bg-white' : 'bg-gradient-to-r from-pink-400 to-pink-400'
                  }`}></span>
                  {feature}
                </motion.li>
              ))}
            </ul>
            
            <motion.button
              onClick={() => openPaymentModal(plan)}
              whileHover={{ scale: 1.005, transition: { duration: 1.3, type: "easeInOut", bounce: 0 } }}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-4 px-6 rounded-2xl font-semibold text-sm transition-all duration-200 ${
                plan.highlighted
                  ? 'bg-white text-pink-600 hover:bg-gray-50 shadow-lg'
                  : 'bg-gradient-to-r from-pink-500 to-pink-100 text-white hover:from-violet-600 hover:to-purple-600 shadow-lg'
              }`}
            >
              {plan.buttonText}
            </motion.button>
            
            <p className="text-xs text-center mt-6 opacity-60">
              No credit card required
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

const PaymentModal = ({ plan, onClose }) => {
  const paypalContainerId =
    plan?.price === 4.99
      ? "paypal-container-CKU8JKC9RU53Q"
      : plan?.price === 8.99
      ? "paypal-container-7DNSTVQMXNZUW"
      : plan?.price === 18.99
      ? "paypal-container-NMJCQ363PSWT8"
      : "paypal-container-CKU8JKC9RU53Q";

  useEffect(() => {
    if (!plan || !window.paypal) return;

    const container = document.getElementById(paypalContainerId);
    if (!container) return;

    // Clear any previously rendered PayPal button
    container.innerHTML = "";

    // Hide all existing PayPal elements on the page first
    const existingPaypalElements = document.querySelectorAll('[id*="paypal"], [class*="paypal"], iframe[src*="paypal"]');
    existingPaypalElements.forEach(el => {
      if (!el.closest(`#${paypalContainerId}`)) {
        el.style.display = 'none';
      }
    });

    // Determine hosted button ID
    const hostedButtonId =
      plan.price === 4.99
        ? "CKU8JKC9RU53Q"
        : plan.price === 8.99
        ? "7DNSTVQMXNZUW"
        : plan.price === 18.99
        ? "NMJCQ363PSWT8"
        : "CKU8JKC9RU53Q";

    // Create a mutation observer to catch any PayPal elements created outside the modal
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            // Check if this is a PayPal-related element
            if (node.id && node.id.includes('paypal') && !node.closest(`#${paypalContainerId}`)) {
              node.style.display = 'none';
            }
            if (node.className && typeof node.className === 'string' && node.className.includes('paypal') && !node.closest(`#${paypalContainerId}`)) {
              node.style.display = 'none';
            }
            // Check for iframes with PayPal src
            if (node.tagName === 'IFRAME' && node.src && node.src.includes('paypal') && !node.closest(`#${paypalContainerId}`)) {
              node.style.display = 'none';
            }
            // Check children of added nodes
            const paypalChildren = node.querySelectorAll ? node.querySelectorAll('[id*="paypal"], [class*="paypal"], iframe[src*="paypal"]') : [];
            paypalChildren.forEach(child => {
              if (!child.closest(`#${paypalContainerId}`)) {
                child.style.display = 'none';
              }
            });
          }
        });
      });
    });

    // Start observing
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Render PayPal Hosted Button
    paypal.HostedButtons({
      hostedButtonId
    }).render(`#${paypalContainerId}`).then(() => {
      // Force PayPal button to stay within container
      const paypalFrame = container.querySelector('iframe');
      if (paypalFrame) {
        paypalFrame.style.position = 'relative';
        paypalFrame.style.width = '100%';
        paypalFrame.style.maxWidth = '100%';
        paypalFrame.style.zIndex = '1';
      }
      
      // Also check for any direct PayPal elements within container
      const paypalElements = container.querySelectorAll('[class*="paypal"]');
      paypalElements.forEach(el => {
        el.style.position = 'relative';
        el.style.width = '100%';
        el.style.maxWidth = '100%';
      });
    }).catch(err => {
      console.error('PayPal button render error:', err);
    });

    // Cleanup function
    return () => {
      observer.disconnect();
      // Hide all PayPal elements when component unmounts
      const allPaypalElements = document.querySelectorAll('[id*="paypal"], [class*="paypal"], iframe[src*="paypal"]');
      allPaypalElements.forEach(el => {
        if (!el.closest(`#${paypalContainerId}`)) {
          el.style.display = 'none';
        }
      });
    };
  }, [plan, paypalContainerId]);

  if (!plan) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
      style={{ isolation: "isolate", contain: "layout style" }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          zIndex: 9999,
          position: "relative",
          isolation: "isolate",
          contain: "layout style paint",
          transform: "translateZ(0)"
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
        >
          ×
        </button>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2 font-['Bricolage_Grotesque']">
            {plan.name} Plan
          </h3>
          <p className="text-gray-600 mb-4">{plan.description}</p>
          <div className="text-3xl font-bold text-purple-600">
            ${plan.price}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-3 text-gray-800">What you get:</h4>
          <ul className="space-y-2">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t pt-6">
          <div
            className="w-full relative"
            style={{
              isolation: "isolate",
              contain: "layout style paint",
              position: "relative",
              zIndex: 1
            }}
          >
            <div
              id={paypalContainerId}
              className="min-h-[50px] w-full relative"
              style={{
                position: "relative",
                zIndex: 1,
                overflow: "hidden",
                contain: "layout style paint",
                isolation: "isolate",
                display: "block",
                width: "100%",
                maxWidth: "100%"
              }}
            ></div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};


const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative py-24 text-center text-gray-600"
    >
      <p className="relative z-10 text-sm font-['Bricolage_Grotesque']">Crafted with <span className='text-pink-500 font-bold'>luv</span> from <span><a href="https://www.linkedin.com/in/jayden-bennet/" className='hover:underline'>Jayden</a></span> & Justin</p>
    </motion.footer>
  )
}

export default App
