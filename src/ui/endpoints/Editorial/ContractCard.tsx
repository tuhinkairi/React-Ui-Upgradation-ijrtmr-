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
      <p className="text-primary text-[15px] xl:text-2xl font-medium">{role}</p>
      <h3 className="text-[18px] xl:text-xl font-bold text-[#141414]">{name}</h3>
      <p className="text-[#2f2f2f] text-[15px] xl:text-xl">{designation},</p>
      <div className="flex items-start gap-2 text-[15px] xl:text-xl text-[#2f2f2f]">
        <Contact2 className="w-5 h-5 mt-0.5" />
        <span>{organization}</span>
      </div>
      <div className="flex items-start gap-2 text-[15px] xl:text-xl text-[#2f2f2f]">
        <Mail className="w-5 h-5 mt-0.5" />
        <span>{email}</span>
      </div>
    </div>
  );
};
