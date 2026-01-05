import Image from 'next/image';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export default function ProfileHeader() {
  return (
    <div className="relative">      
      {/* Profile Content */}
      <div className="px-6 sm:px-8 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-8 items-center md:items-start">
          {/* Profile Photo - Right Side */}
          <div className="flex-shrink-0">
            <div className="relative w-40 h-52 sm:w-48 sm:h-64 lg:w-56 lg:h-72 rounded-2xl border-4 border-gray-200 shadow-2xl overflow-hidden bg-gray-200">
              <Image
                src="/Profile_Portrait.jpg"
                alt="Profile Photo"
                fill
                className="object-cover object-top"
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Text Content - Left Side */}
          <div className="flex-1">
            {/* Name and Title */}
            <div className="mb-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                Hoang (Lincoln) Pham
              </h1>
              <h2 className="text-xl sm:text-2xl text-gray-600 mb-4">
                Sr Quality Assurance Engineer
              </h2>
              <div className="flex items-center text-gray-500 mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Ho Chi Minh City, Vietnam</span>
              </div>
            </div>

            {/* Bio */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              With over 7 years of hands-on experience in software testing, I'm passionate about building a meaningful career 
              and continuously growing my skills. I'm naturally curious and always eager to learn something new. I'm comfortable 
              working in both Manual and Automation Testing, and I communicate confidently in English, both spoken and written. 
              My goal is to bring quality and precision to every project while constantly improving my expertise in testing.
            </p>

            {/* Contact Links */}
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:hoanglk12@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
                <span className="font-medium">Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/hoang-lincoln-pham-71323612a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href="https://github.com/hoanglk12"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
                <span className="font-medium">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
