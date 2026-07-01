import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaInstagram,
    FaFacebookF,
} from "react-icons/fa";

    function ContactInfo({
        email,
        phone,
        location,
        instagram,
        facebook,
    }) {
    return (
        <div className="mx-auto mb-16 max-w-4xl rounded-2xl bg-gray-100 p-10 shadow-sm">

        <h2 className="mb-6 text-center text-3xl font-bold">
            Contact Information
        </h2>

        <div className="space-y-4">

            <div className="flex items-center gap-3">
            <FaEnvelope className="text-gray-600" />
            <a
                href={`mailto:${email}`}
                className="hover:underline"
            >
                {email}
            </a>
            </div>

            <div className="flex items-center gap-3">
            <FaPhone className="text-gray-600" />
            <a
                href={`tel:${phone}`}
                className="hover:underline"
            >
                {phone}
            </a>
            </div>

            <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-gray-600" />
            <span>{location}</span>
            </div>

        </div>

        <div className="mt-8 flex justify-center gap-6">

            <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            >
            <FaInstagram
                size={26}
                className="transition hover:scale-110"
            />
            </a>

            <a
            href={facebook}
            target="_blank"
            rel="noopener noreferrer"
            >
            <FaFacebookF
                size={24}
                className="transition hover:scale-110"
            />
            </a>

        </div>

        </div>
    );
    }

export default ContactInfo;