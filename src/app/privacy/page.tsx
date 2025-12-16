import React from 'react';
import type { Metadata } from 'next';
import Separator from '@/components/ui/Separator';
import LegalPageLayout from '@/components/layouts/LegalPageLayout';
import { CONTENT } from '@/lib/content';
import { COLORS } from '@/lib/constants';

export const metadata: Metadata = {
  title: "Privacy Policy - Leagues of Code",
  description: "Privacy policy for Leagues of Code services",
};

export default function PrivacyPolicy() {
  const { footer, legal } = CONTENT;
  
  return (
    <LegalPageLayout 
      title={legal.privacy.title} 
      lastUpdated={legal.privacy.lastUpdated}
    >

          {/* Introduction */}
          <section className="mb-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 rounded-md" style={{ borderColor: COLORS.primaryDark, boxShadow: `4px 4px 0px 0px ${COLORS.primaryDark}` }}>
            <div className="space-y-4 leading-relaxed" style={{ color: COLORS.grayTextDark }}>
              <h3 className="text-xl font-bold text-black mb-4">Introduction</h3>
              <p>
                At Leagues of Code, accessible from leaguesofcode.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Leagues of Code and how we use it.
              </p>
              <p>
                If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collected in Leagues of Code. This policy is not applicable to any information collected offline or via channels other than this website.
              </p>
            </div>
          </section>

          <Separator text="Consent" />

          <section className="mb-8">
            <div className="space-y-4 leading-relaxed" style={{ color: COLORS.grayTextDark }}>
              <p>
                By using our website, you hereby consent to our Privacy Policy and agree to its terms.
              </p>
            </div>
          </section>

          <Separator text="Information We Collect" />

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Information We Collect
            </h2>
            <div className="space-y-4 leading-relaxed" style={{ color: COLORS.grayTextDark }}>
              <p>
                The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
              </p>
              <p>
                If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
              </p>
              <p>
                When you register for an Account, we collect the following information:
              </p>

              <div className="bg-white border-2 border-black rounded-md shadow-[4px_4px_0px_0px_#000000] p-6">
                <h3 className="text-xl font-bold text-black mb-4">Categories of Personal Data</h3>
                <ul className="list-disc pl-6 space-y-2" style={{ color: COLORS.grayTextDark }}>
                  <li>Name</li>
                  <li>Nationality</li>
                  <li>Email</li>
                  <li>Date of birth</li>
                  <li>Place of birth</li>
                  <li>Billing address</li>
                  <li>Phone number</li>
                  <li>City and country of residence</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Retention Period
            </h2>
            <div className="space-y-4 leading-relaxed" style={{ color: COLORS.grayTextDark }}>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p>
                  The retention period lasts until you have been accepted/declined entry to the course or programme and as necessary to comply with any such legal obligation to which Leagues of Code is subject.
                </p>
              </div>
            </div>
          </section>

          <Separator text="How We Use Your Information" />

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              How We Use Your Information
            </h2>
            <div className="space-y-4 leading-relaxed" style={{ color: COLORS.grayTextDark }}>
              <p>
                We use the information we collect in various ways, including to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, operate, and maintain our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Find and prevent fraud</li>
              </ul>
            </div>
          </section>

          <Separator text="Log Files" />

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Log Files
            </h2>
            <div className="space-y-4 leading-relaxed" style={{ color: COLORS.grayTextDark }}>
              <p>
                Leagues of Code follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services&apos; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
              </p>
              <p>
                These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.
              </p>
            </div>
          </section>

          <Separator text="Cookies and Web Beacons" />

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Cookies and Web Beacons
            </h2>
            <div className="space-y-4 leading-relaxed" style={{ color: COLORS.grayTextDark }}>
              <p>
                Like any other website, Leagues of Code uses &apos;cookies&apos;. These cookies are used to store information including visitors preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
              </p>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-md p-4">
                <h4 className="font-bold text-black mb-2">We use different types of cookies:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Session cookies</strong> are temporary cookies that end when you close your browser or device</li>
                  <li><strong>Permanent cookies</strong> remain on your computer until you delete them or they expire</li>
                  <li><strong>First-party cookies</strong> are set by the site you visit</li>
                  <li><strong>Third-party cookies</strong> are set by another site. At Leagues of Code, these are primarily used for analysis (such as Google Analytics)</li>
                </ul>
              </div>

              <p>
                Similar techniques store information in your browser or device in a manner similar to cookies.
              </p>
            </div>
          </section>

          <Separator text="Third Party Privacy Policies" />

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Advertising Partners Privacy Policies
            </h2>
            <div className="space-y-4 leading-relaxed" style={{ color: COLORS.grayTextDark }}>
              <p>
                You may consult this list to find the Privacy Policy for each of the advertising partners of Leagues of Code.
              </p>
              <p>
                Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Leagues of Code, which are sent directly to users&apos; browsers. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
              </p>
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p>
                  <strong>Note:</strong> Leagues of Code has no access to or control over these cookies that are used by third-party advertisers.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Third Party Privacy Policy
            </h2>
            <div className="space-y-4 leading-relaxed" style={{ color: COLORS.grayTextDark }}>
              <p>
                Leagues of Code&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
              </p>

              <div className="bg-white border-2 border-black rounded-md shadow-[4px_4px_0px_0px_#000000] p-6">
                <h4 className="font-bold text-black mb-2">Third parties may include but are not limited to:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Google Maps API(s)</li>
                  <li>Google Analytics</li>
                  <li>Facebook</li>
                  <li>Hotjar</li>
                </ul>
              </div>

              <p>
                You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&apos; respective websites.
              </p>
            </div>
          </section>

          <Separator text="GDPR Data Protection Rights" />

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              GDPR Data Protection Rights
            </h2>
            <div className="space-y-4 leading-relaxed" style={{ color: COLORS.grayTextDark }}>
              <p>
                We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border-2 border-green-200 rounded-md p-4">
                  <h4 className="font-bold text-black mb-2">The right to access</h4>
                  <p className="text-sm">You have the right to request copies of your personal data. We may charge you a small fee for this service.</p>
                </div>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-md p-4">
                  <h4 className="font-bold text-black mb-2">The right to rectification</h4>
                  <p className="text-sm">You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</p>
                </div>

                <div className="bg-purple-50 border-2 border-purple-200 rounded-md p-4">
                  <h4 className="font-bold text-black mb-2">The right to erasure</h4>
                  <p className="text-sm">You have the right to request that we erase your personal data, under certain conditions.</p>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-md p-4">
                  <h4 className="font-bold text-black mb-2">The right to restrict processing</h4>
                  <p className="text-sm">You have the right to request that we restrict the processing of your personal data, under certain conditions.</p>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-md p-4">
                  <h4 className="font-bold text-black mb-2">The right to object to processing</h4>
                  <p className="text-sm">You have the right to object to our processing of your personal data, under certain conditions.</p>
                </div>

                <div className="bg-indigo-50 border-2 border-indigo-200 rounded-md p-4">
                  <h4 className="font-bold text-black mb-2">The right to data portability</h4>
                  <p className="text-sm">You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</p>
                </div>
              </div>

              <div className="bg-gray-100 border-2 border-gray-300 rounded-md p-4 mt-4">
                <p className="font-semibold text-black">
                  If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                </p>
              </div>
            </div>
          </section>

          <Separator text="Children's Information" />

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Children&apos;s Information
            </h2>
            <div className="space-y-4 leading-relaxed" style={{ color: COLORS.grayTextDark }}>
              <div className="bg-orange-50 border-2 border-orange-200 rounded-md p-4">
                <p>
                  Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                </p>
              </div>
            </div>
          </section>

          <Separator text="Contact Information" />

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Contact Information
            </h2>
            <div className="space-y-4 leading-relaxed" style={{ color: COLORS.grayTextDark }}>
              <p>
                If you have any questions regarding our Privacy Policy or any other question regarding our processing, please contact us:
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 rounded-md p-6" style={{ borderColor: COLORS.primaryDark, boxShadow: `4px 4px 0px 0px ${COLORS.primaryDark}` }}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p><strong>Email:</strong> {footer.contact.email}</p>
                    <p><strong>Address:</strong> {footer.company.address}</p>
                  </div>
                  <div>
                    <p><strong>City:</strong> Barcelona, Spain</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </LegalPageLayout>
  );
}
