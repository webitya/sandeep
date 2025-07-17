"use client"

import { useState } from "react"
import { CalendarIcon, MailIcon, PhoneIcon, UserIcon, BriefcaseIcon, CheckCircleIcon, XCircleIcon } from "lucide-react"
import FooterEl from "@/components/FooterEl"

export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    professionalType: "",
    preferredDateTime: "",
    message: "",
  })
  const [submissionStatus, setSubmissionStatus] = useState(null) // 'success', 'error', null
  const [loading, setLoading] = useState(false)
  const [validationErrors, setValidationErrors] = useState({})

  const validateForm = () => {
    const errors = {}
    if (!formData.name.trim()) errors.name = "Name is required."
    if (!formData.email.trim()) {
      errors.email = "Email is required."
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid."
    }
    if (!formData.contactNumber.trim()) errors.contactNumber = "Contact number is required."
    if (!formData.professionalType) errors.professionalType = "Professional type is required."
    if (!formData.preferredDateTime) errors.preferredDateTime = "Preferred date and time is required."
    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
    if (validationErrors[id]) {
      setValidationErrors((prev) => ({ ...prev, [id]: undefined }))
    }
  }

  const handleSelectChange = (e) => {
    const value = e.target.value
    setFormData((prev) => ({ ...prev, professionalType: value }))
    if (validationErrors.professionalType) {
      setValidationErrors((prev) => ({ ...prev, professionalType: undefined }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) {
      return
    }

    setLoading(true)
    setSubmissionStatus(null)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmissionStatus("success")
        setValidationErrors({})
      } else {
        const errorData = await response.json()
        console.error("Email sending failed:", errorData.error)
        setSubmissionStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmissionStatus("error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 lg:p-8 relative overflow-hidden">
        {/* Creative background shapes for glassmorphism effect */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="w-full max-w-2xl my-10 rounded-xl shadow-2xl border border-white/50 bg-white/60 backdrop-blur-xl relative z-10 p-6 sm:p-8">
          {/* Adjusted padding for header and content */}
          <div className="text-center pb-4">
            <h2 className="text-4xl font-extrabold text-blue-900 tracking-tight drop-shadow-sm">
              Unlock Your Potential
            </h2>
            <p className="text-lg text-blue-700 mt-2">
              Ready to assess and elevate your sales and marketing skills? Fill out the form below to schedule your
              test.
            </p>
          </div>
          <div className="pt-4">
            {submissionStatus === "success" && (
              <div className="mb-4 rounded-lg bg-green-50/80 p-4 text-green-800 border border-green-200 shadow-sm backdrop-blur-sm flex items-start gap-3 text-sm">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-1">🎉 Thank You for Your Enquiry!</h3>
                  <p>
                    We have successfully received your request to test your current sales and marketing skills. The test
                    typically takes about <strong>1 to 2 hours</strong>.
                  </p>
                  <p className="mt-2">
                    Our team will be in touch very soon to coordinate a convenient time.
                    <span className="block mt-1 text-xs text-green-700 opacity-80">
                      Note: We are currently experiencing high demand, so please expect a slight delay. We appreciate
                      your patience!
                    </span>
                  </p>
                </div>
              </div>
            )}

            {submissionStatus === "error" && (
              <div className="mb-4 rounded-lg bg-red-50/80 p-4 text-red-800 border border-red-200 shadow-sm backdrop-blur-sm flex items-start gap-3 text-sm">
                <XCircleIcon className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Oops! Something Went Wrong.</h3>
                  <p>
                    There was an issue submitting your enquiry. Please check your details and try again, or contact us
                    directly if the problem persists.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Reduced space-y from 6 to 4 */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Reduced gap from 6 to 4 */}
                <div className="space-y-1.5">
                  {/* Reduced space-y from 2 to 1.5 */}
                  <label htmlFor="name" className="flex items-center gap-2 text-blue-800 font-medium text-sm">
                    <UserIcon className="h-4 w-4 text-blue-600" /> Name
                  </label>
                  <input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    required
                    className={`flex h-10 w-full rounded-md border border-white/50 bg-white/70 px-3 py-1.5 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 ease-in-out hover:border-blue-300 shadow-sm focus:shadow-md ${
                      validationErrors.name ? "border-red-500" : ""
                    }`}
                    disabled={loading || submissionStatus === "success"}
                  />
                  {validationErrors.name && <p className="text-red-500 text-xs mt-1">{validationErrors.name}</p>}
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="flex items-center gap-2 text-blue-800 font-medium text-sm">
                    <MailIcon className="h-4 w-4 text-blue-600" /> Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@example.com"
                    required
                    className={`flex h-10 w-full rounded-md border border-white/50 bg-white/70 px-3 py-1.5 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 ease-in-out hover:border-blue-300 shadow-sm focus:shadow-md ${
                      validationErrors.email ? "border-red-500" : ""
                    }`}
                    disabled={loading || submissionStatus === "success"}
                  />
                  {validationErrors.email && <p className="text-red-500 text-xs mt-1">{validationErrors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="contactNumber" className="flex items-center gap-2 text-blue-800 font-medium text-sm">
                    <PhoneIcon className="h-4 w-4 text-blue-600" /> Contact Number
                  </label>
                  <input
                    id="contactNumber"
                    type="tel"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="e.g., +1 (555) 123-4567"
                    required
                    className={`flex h-10 w-full rounded-md border border-white/50 bg-white/70 px-3 py-1.5 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 ease-in-out hover:border-blue-300 shadow-sm focus:shadow-md ${
                      validationErrors.contactNumber ? "border-red-500" : ""
                    }`}
                    disabled={loading || submissionStatus === "success"}
                  />
                  {validationErrors.contactNumber && (
                    <p className="text-red-500 text-xs mt-1">{validationErrors.contactNumber}</p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="professionalType"
                    className="flex items-center gap-2 text-blue-800 font-medium text-sm"
                  >
                    <BriefcaseIcon className="h-4 w-4 text-blue-600" /> Professional Type
                  </label>
                  <div className="relative">
                    <select
                      id="professionalType"
                      value={formData.professionalType}
                      onChange={handleSelectChange}
                      required
                      className={`flex h-10 w-full rounded-md border border-white/50 bg-white/70 px-3 py-1.5 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none pr-8 transition-all duration-200 ease-in-out hover:border-blue-300 shadow-sm focus:shadow-md ${
                        validationErrors.professionalType ? "border-red-500" : ""
                      }`}
                      disabled={loading || submissionStatus === "success"}
                    >
                      <option value="" disabled hidden>
                        Select your professional type
                      </option>
                      <option value="founder">Founder</option>
                      <option value="working-professional">Working Professional</option>
                    </select>
                    <svg
                      className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50 pointer-events-none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                  {validationErrors.professionalType && (
                    <p className="text-red-500 text-xs mt-1">{validationErrors.professionalType}</p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="preferredDateTime"
                  className="flex items-center gap-2 text-blue-800 font-medium text-sm"
                >
                  <CalendarIcon className="h-4 w-4 text-blue-600" /> Preferred Date & Time
                </label>
                <div className="relative">
                  <input
                    id="preferredDateTime"
                    type="datetime-local" // Keep datetime-local for functionality, but adjust placeholder
                    value={formData.preferredDateTime}
                    onChange={handleChange}
                    placeholder="mm/dd/yyyy --:--" // Updated placeholder
                    required
                    className={`flex h-10 w-full rounded-md border border-white/50 bg-white/70 px-3 py-1.5 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 ease-in-out hover:border-blue-300 shadow-sm focus:shadow-md ${
                      validationErrors.preferredDateTime ? "border-red-500" : ""
                    }`}
                    disabled={loading || submissionStatus === "success"}
                  />
                  {/* If you want the calendar icon inside the input, you'd need to change type="text" and implement a custom picker */}
                  {/* For now, keeping datetime-local for native functionality */}
                </div>
                {validationErrors.preferredDateTime && (
                  <p className="text-red-500 text-xs mt-1">{validationErrors.preferredDateTime}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="flex items-center gap-2 text-blue-800 font-medium text-sm">
                  <MailIcon className="h-4 w-4 text-blue-600" /> Additional Message (Optional)
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any specific notes or questions for us?"
                  className="flex min-h-[100px] w-full rounded-md border border-white/50 bg-white/70 px-3 py-1.5 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 ease-in-out hover:border-blue-300 shadow-sm focus:shadow-md"
                  disabled={loading || submissionStatus === "success"}
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full py-3 text-lg font-semibold bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 shadow-lg hover:shadow-xl text-white hover:scale-[1.02] active:scale-[0.98]"
                disabled={loading || submissionStatus === "success"}
              >
                {submissionStatus === "success"
                  ? "Submitted successfully"
                  : loading
                    ? "Submitting Enquiry..."
                    : "Submit Your Enquiry"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <FooterEl />
    </>
  )
}
