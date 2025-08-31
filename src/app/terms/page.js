import React from 'react';
import { Diamond } from 'lucide-react';

export const metadata = {
  title: "Terms of Service - Leagues of Code",
  description: "Terms and conditions for using Leagues of Code services",
};

// Separator Component
function SectionSeparator({ text }) {
  return (
    <div className="w-full my-10">
      <Diamond className="h-4 w-4 mx-auto" fill={"#3959FF"} stroke={"#3959FF"}/>
      <h4 className="text-xl font-semibold text-black text-center font-sans pt-2">{text}</h4>
    </div>
  );
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 md:mb-12 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-[#626262]">
              Last updated: 17 October 2022
            </p>
          </div>

          {/* About Section */}
          <section className="mb-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-[#1836CF] rounded-md shadow-[4px_4px_0px_0px_#1836CF]">
            <div className="space-y-4 text-[#444444] leading-relaxed">
              <h3 className="text-xl font-bold text-black mb-4">About Leagues of Code</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>Owner:</strong> HARBOUR. SPACE BCN S.L.U.</p>
                  <p><strong>CIF:</strong> B-66667064</p>
                  <p><strong>Email:</strong> hello@leaguesofcode.com</p>
                  <p><strong>Phone:</strong> +34671498303</p>
                </div>
                <div>
                  <p><strong>Address:</strong> c. / Rosa Sensat, nº 9-11, 08005 Barcelona</p>
                  <p><strong>Commercial name:</strong> ONLINE CODING AND MATHEMATICS VIRTUAL ACADEMY &quot;LEAGUES OF CODE&quot;</p>
                </div>
              </div>
              <p className="mt-4">
                Leagues of Code (&quot;LoC&quot;) is an online coding and mathematics academy for children and young adults aged 9-18, created to encourage, develop and hone the skills required in a new tech-dominated world. LoC&apos;s mission is to provide affordable, personalized high quality online education in coding and math to children around the world.
              </p>
            </div>
          </section>

          <SectionSeparator text="Service Requirements" />

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Minimum Requirements for Contracting of Service
            </h2>
            <div className="space-y-4 text-[#444444] leading-relaxed">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Minimum student age:</strong> 9 years old</li>
                <li><strong>English knowledge level:</strong> Advanced</li>
                <li><strong>Math knowledge level:</strong> Good command of basic arithmetics</li>
                <li><strong>Computer knowledge level:</strong> Not required</li>
                <li><strong>Internet connection:</strong> High speed broadband internet</li>
                <li><strong>Operating System:</strong> Any</li>
                <li><strong>Browser:</strong> Any</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <p><strong>Purchase Age:</strong> 18 years (articles 315 and 322 of the Civil Code). Minors must send with the signed registration form the authorization signed by the legal guardian(s).</p>
                <p><strong>Retention period:</strong> 36 months following the collection of the data or consent is revoked.</p>
              </div>
            </div>
          </section>

          <SectionSeparator text="Course Information" />

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Free Trial and Starting Dates
            </h2>
            <div className="space-y-4 text-[#444444] leading-relaxed">
              <p>
                Every student who signs up to the program benefits from a free induction period, which includes an orientation session, the placement test (to understand their level) and the first module.
              </p>
              <p>
                In some special promotional cases, the free trial can be extended to more than that. In any case, a student is only allowed one free trial period in any of Leagues of Code products; those include but are not limited to the regular program, open cups and camps.
              </p>
              <p>
                Generally, we have many starting dates (cohort launches) throughout the year. Any new student signed up will start on a specific starting date (by default, the next one).
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Content, Duration, Schedule of the Course
            </h2>
            <div className="space-y-4 text-[#444444] leading-relaxed">
              <p>
                The LoC curriculum spans the full spectrum from absolute beginner to the most advanced international programming competition level such as IOI.
              </p>
              <p>
                It is organised in <strong>5 Leagues</strong> (Apprentice, Junior, Senior, Pro, and Super), each composed of <strong>10 modules of 4 weeks</strong>. New students are initially positioned into one of 3 Divisions within a League - A (advanced), B (basic) or C (casual), depending on the outcome of their placement test.
              </p>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-md p-4">
                <h4 className="font-bold text-black mb-2">Module Structure (Each 4-week module consists of):</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>1 weekly 2-hour group online sessions during weekend (problem solving, theory and content)</li>
                  <li>4 weekly practice problems to solve for next session</li>
                  <li>On demand assistance from instructor throughout the module</li>
                  <li>1 monthly webinar with an industry professional</li>
                  <li>1 one-on-one session (45 mins each on demand)</li>
                </ul>
              </div>

              <h4 className="font-bold text-black mt-6 mb-2">Passing a Module</h4>
              <p>
                The student agrees to attend classes in a minimum percentage of 70%. Only 1 absence per module is allowed. To issue the course diploma, the student must pass all 10 modules of a league&apos;s exams with a minimum passing grade of 70% for each module.
              </p>
            </div>
          </section>

          <SectionSeparator text="Additional Programs" />

          <section className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-black rounded-md shadow-[4px_4px_0px_0px_#000000] p-6">
                <h3 className="text-xl font-bold text-black mb-3">Hello World Programme</h3>
                <p className="text-[#444444] mb-3">
                  A 12-week programme designed for coding enthusiasts, aged 10+ who want to start their programming journey with Python.
                </p>
                <div className="bg-green-50 border border-green-200 rounded p-3">
                  <p className="text-sm"><strong>Price:</strong> 150 EUR (one-off payment)</p>
                  <p className="text-sm"><strong>Refund:</strong> Full refund available within first 2 weeks</p>
                </div>
              </div>

              <div className="bg-white border-2 border-black rounded-md shadow-[4px_4px_0px_0px_#000000] p-6">
                <h3 className="text-xl font-bold text-black mb-3">LoC Olympics</h3>
                <p className="text-[#444444] mb-3">
                  Training program for Spanish Computer Science Olympiads using C++. Course runs from November 1st to June 30th.
                </p>
                <div className="bg-green-50 border border-green-200 rounded p-3">
                  <p className="text-sm"><strong>Price:</strong> 99 EUR (one-off) or 15 EUR/month</p>
                  <p className="text-sm"><strong>Refund:</strong> Full refund available within first 2 weeks</p>
                </div>
              </div>
            </div>
          </section>

          <SectionSeparator text="Pricing & Payment" />

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Payment Plans
            </h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#1836CF] text-white p-6 rounded-md border-2 border-black shadow-[4px_4px_0px_0px_#000000]">
                  <h4 className="text-xl font-bold mb-2">Monthly Plan</h4>
                  <p className="text-3xl font-bold mb-2">€199/month</p>
                  <p className="text-sm opacity-90">Per module payment</p>
                </div>
                <div className="bg-white p-6 rounded-md border-2 border-[#1836CF] shadow-[4px_4px_0px_0px_#1836CF]">
                  <h4 className="text-xl font-bold mb-2 text-black">Annual Plan</h4>
                  <p className="text-3xl font-bold mb-2 text-[#1836CF]">€1,499/year</p>
                  <p className="text-sm text-[#444444]">Includes all 10 modules + activities</p>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                <p className="text-sm text-[#444444]">
                  <strong>Extra one-on-ones:</strong> 35 EUR per 45-minute session (book 3 days in advance)<br/>
                  <strong>Payment methods:</strong> Credit card via Stripe (preferred), PayPal, Bank Transfer (upon request)
                </p>
              </div>
            </div>
          </section>

          <SectionSeparator text="Cancellation & Refunds" />

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Refund and Cancellation Policy
            </h2>
            <div className="space-y-4 text-[#444444] leading-relaxed">
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p><strong>Monthly Payment Plan:</strong> No refunds available.</p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <p><strong>Annual Payment Plan:</strong> 50% refund available on all remaining unused modules at the point of cancellation.</p>
                <p className="text-sm mt-2"><em>Example: After 3 modules, refund = 50% × 7/10 × €1,499 = €524.65</em></p>
              </div>
              <p>
                Cancellations must be reported in writing to <strong>support@leaguesofcode.com</strong> and must include all registration data.
              </p>
            </div>
          </section>

          <SectionSeparator text="Conduct & Responsibilities" />

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Zero Tolerance on Cheating
            </h2>
            <div className="space-y-4 text-[#444444] leading-relaxed">
              <div className="bg-red-50 border-2 border-red-200 rounded-md p-4">
                <p>
                  We have zero tolerance for any sort of fraud and cheating (students must solve the problems on their own and not copy others). Cheating can lead to a termination of the agreement, at our discretion.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Intellectual Property and Use of Contents
            </h2>
            <div className="space-y-4 text-[#444444] leading-relaxed">
              <p>
                All texts, logos, graphics, images, source codes and contents are the property of &quot;LoC&quot; or of third parties from which they have acquired their exploitation rights, and are protected by intellectual and industrial property rights.
              </p>
              <p>
                The user has the right only to the private use of the access and its contents for educational purposes. Total or partial reproduction of any of the contents is prohibited without express authorization.
              </p>
              <p>
                &quot;LoC&quot; reserves the unilateral rights and ownership to the class recordings that may include voice or video recordings of the students. LoC has the right to share these recordings with other users and parties for educational and commercial purposes.
              </p>
            </div>
          </section>

          <SectionSeparator text="Legal Information" />

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Applicable Law and Jurisdiction
            </h2>
            <div className="space-y-4 text-[#444444] leading-relaxed">
              <p>
                Everything regarding online courses access and platform usage is governed exclusively by Spanish law. In the event of any discrepancy or difference between the parties, they must be submitted to the Courts and Tribunals of Barcelona (Spain).
              </p>
              <p>
                These Terms of Use and Contract have been drawn up on August 16, 2021, in observance of Law 7/1998, of April 13, about general contracting conditions.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Contact Information
            </h2>
            <div className="space-y-4 text-[#444444] leading-relaxed">
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-[#1836CF] rounded-md shadow-[4px_4px_0px_0px_#1836CF] p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p><strong>Email:</strong> hello@leaguesofcode.com</p>
                    <p><strong>Phone:</strong> +34 671 498 303</p>
                  </div>
                  <div>
                    <p><strong>Address:</strong> Carrer de Rosa Sensat, 9-11, 08005 Barcelona, Spain</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Back to Home Button */}
        </div>
      </div>
    </div>
  );
}