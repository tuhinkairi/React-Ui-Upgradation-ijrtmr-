import { Mail, Contact2 } from "lucide-react";

interface ContactCardProps {
  role: string;
  name: string;
  designation: string;
  organization: string;
  email: string;
}

export const ContactCard = ({
  role,
  name,
  designation,
  organization,
  email,
}: ContactCardProps) => {
  return (
    <div className="rounded-2xl bg-white shadow shadowSprade w-full max-w-3xl px-6 py-5 space-y-2">
      <h2 className="text-primary lg:text-lg 2xl:text-xl font-medium">{role}</h2>
      <h2 className="text-base 2xl:text-lg font-bold text-[#141414]">{name}</h2>
      <p className="text-[#2f2f2f] lg:text-lg 2xl:text-xl">{designation},</p>
      <div className="flex items-start gap-2 lg:text-lg 2xl:text-xl text-[#2f2f2f]">
        <Contact2 className="w-5 h-5 mt-[.20rem]" />
        <span>{organization}</span>
      </div>
      <div className="flex items-center gap-2 lg:text-lg 2xl:text-xl text-[#2f2f2f]">
        <Mail className="w-5 h-5 mt-0.5" />
        <span>{email}</span>
      </div>
    </div>
  );
};
