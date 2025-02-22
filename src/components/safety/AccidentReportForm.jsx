import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import BodyPartSelectorWithDetails from "./BodyPartSelectorWithDetails";

const AccidentReportForm = () => {
  const [medicalRequired, setMedicalRequired] = useState(false);
  const [accidentLocation, setAccidentLocation] = useState("");
  const [subLocationOptions, setSubLocationOptions] = useState([]);
  const [specificActivityOptions, setSpecificActivityOptions] = useState([]);

  // Kazanın gerçekleştiği yer seçenekleri
  const locationOptions = {
    "İş Yerinde": [
      "Sıcak Alan",
      "Soğuk Hazırlık Alanı",
      "Et Hazırlık Alanı",
      "Pastane",
      "Bulaşıkhane",
      "Ofis",
      "Kimyasal Depo",
      "Kuru Gıda Depo",
      "Ekipman Depo",
      "Soğuk Depo",
      "Dinlenme Alanı (Çalışan)",
      "Yemek Servis Alanı",
      "Çöp Alanı",
      "Yağ Atık Alanı",
      "Müşteri Ortak Alan",
    ],
    "İş Yeri Dışında": [
      "Servis ile iş yerine geliş/gidiş",
      "Şirket aracı ile iş yerine geliş/gidiş",
      "Kendi aracı ile iş yerine geliş/gidiş",
      "Toplu taşıma ile iş yerine geliş/gidiş",
    ],
  };

  // Genel Faaliyet Seçenekleri
  const generalActivityOptions = {
    Hareket: ["Yürüme", "Koşma", "Denge Kaybı"],
    "Malzeme Kullanımı": ["Elle Taşıma", "Forklift Kullanımı"],
    Temizlik: ["Islak Zeminde Kayma", "Kimyasal Kullanımı"],
  };

  // Tıbbi müdahale seçenekleri
  const medicalPersonnelOptions = [
    "İlkyardım Görevlisi",
    "Sağlık Personeli",
    "Diğer",
  ];

  const formik = useFormik({
    initialValues: {
      businessName: "",
      accidentDate: "",
      accidentTime: "",
      employeeName: "",
      jobTitle: "",
      accidentPlace: "",
      accidentSubLocation: "",
      generalActivity: "",
      specificActivity: "",
      accidentSeverity: "",
      accidentType: "",
      // Vücut haritası ile seçilen hasar bölgesi burada tutuluyor.
      injuryLocation: [],
      // Kaza detayları: kaza zararı ve kaza cinsi formun diğer alanlarından girilecek,
      // hasarYeri ise BodyPartSelectorWithDetails'ten gelecek.
      accidentDetails: {
        kazaZarari: "",
        kazaCinsi: "",
        hasarYeri: "",
      },
      medicalIntervention: "Hayır",
      medicalPersonnel: "",
      medicalPersonnelName: "",
      accidentDescription: "",
      accidentAttachments: null,
      accidentWitness: "",
      witnessPhone: "",
      workContinued: "Evet",
      accidentShiftStart: "",
      accidentShiftEnd: "",
      accidentRelative: "",
      accidentRelativeRelation: "",
    },
    validationSchema: Yup.object({
      businessName: Yup.string().required("İşletme adı gereklidir."),
      accidentDate: Yup.date().required("Kaza tarihi gereklidir."),
      accidentTime: Yup.string().required("Kaza saati gereklidir."),
      employeeName: Yup.string().required("Çalışan adı gereklidir."),
      accidentPlace: Yup.string().required("Kazanın gerçekleştiği yer gereklidir."),
      accidentDetails: Yup.object({
        kazaZarari: Yup.string().required("Kaza zararı seçilmelidir."),
        kazaCinsi: Yup.string().required("Kaza cinsi seçilmelidir."),
        hasarYeri: Yup.string().required("Hasarın vücuttaki yeri seçilmelidir."),
      }),
    }),
    onSubmit: (values) => {
      // Eğer vücut haritasından herhangi bir seçim yapılmamışsa
      if (values.injuryLocation.length === 0) {
        values.accidentDetails.kazaZarari =
          "Yaralanmasız/Etkisi gözle görünmeyen";
        values.accidentDetails.hasarYeri = "";
      } else {
        values.accidentDetails.kazaZarari = "";
        values.accidentDetails.hasarYeri = values.injuryLocation.join(", ");
      }
      console.log("Form Gönderildi", values);
    },
  });

  // Kazanın gerçekleştiği yer seçildiğinde alt menüyü güncelle
  const handleAccidentLocationChange = (e) => {
    const selectedLocation = e.target.value;
    setAccidentLocation(selectedLocation);
    setSubLocationOptions(locationOptions[selectedLocation] || []);
    formik.setFieldValue("accidentPlace", selectedLocation);
  };

  // Genel Faaliyet değiştiğinde alt seçenekleri güncelle
  const handleGeneralActivityChange = (e) => {
    const selectedActivity = e.target.value;
    setSpecificActivityOptions(generalActivityOptions[selectedActivity] || []);
    formik.setFieldValue("generalActivity", selectedActivity);
  };

  // Tıbbi müdahale alanlarını aç/kapat
  const handleMedicalChange = (e) => {
    setMedicalRequired(e.target.value === "Evet");
    formik.handleChange(e);
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-6 text-center">
        İş Kazası ve Ramak Kala Bildirimi
      </h2>

      <form onSubmit={formik.handleSubmit} className="grid grid-cols-2 gap-6">
        {/* 1. Genel Bilgiler */}
        <h3 className="col-span-2 text-lg font-semibold">1. Genel Bilgiler</h3>
        <input
          name="businessName"
          placeholder="İşletme Adı"
          onChange={formik.handleChange}
          className="input w-full"
        />
        <input
          type="date"
          name="accidentDate"
          onChange={formik.handleChange}
          className="input w-full"
        />
        <input
          type="time"
          name="accidentTime"
          onChange={formik.handleChange}
          className="input w-full"
        />

        {/* 2. Kazanın Gerçekleştiği Yer */}
        <h3 className="col-span-2 text-lg font-semibold">
          2. Kazanın Gerçekleştiği Yer ve Ortam
        </h3>
        <select
          name="accidentPlace"
          onChange={handleAccidentLocationChange}
          className="input w-full"
        >
          <option value="">Kazanın Gerçekleştiği Yer</option>
          {Object.keys(locationOptions).map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
        {subLocationOptions.length > 0 && (
          <select
            name="accidentSubLocation"
            onChange={formik.handleChange}
            className="input w-full"
          >
            <option value="">Alt Bölge Seçin</option>
            {subLocationOptions.map((subLoc) => (
              <option key={subLoc} value={subLoc}>
                {subLoc}
              </option>
            ))}
          </select>
        )}

        {/* 3. Kaza Sırasındaki Faaliyetler */}
        <h3 className="col-span-2 text-lg font-semibold">
          3. Kaza Sırasındaki Faaliyetler
        </h3>
        <select
          name="generalActivity"
          onChange={handleGeneralActivityChange}
          className="input w-full"
        >
          <option value="">Genel Faaliyet</option>
          {Object.keys(generalActivityOptions).map((activity) => (
            <option key={activity} value={activity}>
              {activity}
            </option>
          ))}
        </select>
        {specificActivityOptions.length > 0 && (
          <select
            name="specificActivity"
            onChange={formik.handleChange}
            className="input w-full"
          >
            <option value="">Spesifik Faaliyet Seçin</option>
            {specificActivityOptions.map((activity) => (
              <option key={activity} value={activity}>
                {activity}
              </option>
            ))}
          </select>
        )}

        {/* 4. Hasarlı Vücut Bölgesi */}
        <h3 className="col-span-2 text-lg font-semibold">
          4. Hasarlı Vücut Bölgesi
        </h3>
        <BodyPartSelectorWithDetails
          selectedParts={formik.values.injuryLocation}
          setSelectedParts={(parts) =>
            formik.setFieldValue("injuryLocation", parts)
          }
          accidentDetails={formik.values.accidentDetails}
          setAccidentDetails={(details) =>
            formik.setFieldValue("accidentDetails", details)
          }
        />

        {/* 5. Tıbbi Müdahale */}
        <h3 className="col-span-2 text-lg font-semibold">
          5. Tıbbi Müdahale
        </h3>
        <select
          name="medicalIntervention"
          onChange={handleMedicalChange}
          className="input w-full"
        >
          <option value="Hayır">Tıbbi Müdahale Yapıldı mı?</option>
          <option value="Evet">Evet</option>
        </select>
        {medicalRequired && (
          <>
            <select
              name="medicalPersonnel"
              onChange={formik.handleChange}
              className="input w-full"
            >
              <option value="">Tıbbi Müdahaleyi Yapan Kişi</option>
              {medicalPersonnelOptions.map((person) => (
                <option key={person} value={person}>
                  {person}
                </option>
              ))}
            </select>
            <input
              name="medicalPersonnelName"
              placeholder="Ad Soyad"
              onChange={formik.handleChange}
              className="input w-full"
            />
          </>
        )}

        {/* 6. Ek Açıklamalar ve Dosya Yükleme */}
        <h3 className="col-span-2 text-lg font-semibold">
          6. Ek Açıklamalar ve Dosya Yükleme
        </h3>
        <textarea
          name="accidentDescription"
          placeholder="Kazanın Açıklaması"
          onChange={formik.handleChange}
          className="textarea w-full"
        ></textarea>
        <input type="file" className="input w-full" />

        {/* 7. Form Butonları */}
        <h3 className="col-span-2 text-lg font-semibold">
          7. Form Butonları
        </h3>
        <button type="submit" className="btn btn-blue">
          Kaydet
        </button>
      </form>
    </div>
  );
};

export default AccidentReportForm;
