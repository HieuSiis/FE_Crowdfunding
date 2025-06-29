"use client";

import Image from "next/image";
import { useState } from "react";
import Rocket from '@/assets/images/campaign/rocket.svg'
import { Dropdown } from "@/components/ui/Icon";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import MoneyBagIcon from "@/components/ui/Icon/Campaign/MoneyBagIcon";
import Link from "next/link";
import PrimaryButton from "@/components/ui/Button/PrimaryButton";
import axios from "axios";
import { API_URL } from "../../../../server";
import { useRouter } from "next/navigation";

export default function StartCampaignPage() {

    const [value, setValue] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [errors, setErrors] = useState({
        title: "",
        category: "",
        shortDescription: "",
        story: "",
        goal: "",
        raised: "",
        amountPrefilled: "",
        video: "",
        endMethod: "",
        country: "",
        startDate: "",
        endDate: "",
    });
    console.log(value)
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        shortDescription: "",
        story: "",
        goal: "",
        raised: "",
        amountPrefilled: "",
        video: "",
        endMethod: "",
        country: "",
        startDate: "",
        endDate: "",
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(
                `${API_URL}/campaigns/create`, { ...formData, story: value, }, { withCredentials: true, }
            );
            console.log("Campaign created:", response.data);
            alert("Campaign created successfully!");
            router.push("/campaign");
        } catch (error: any) {
            setErrors((prev) => ({
                ...prev,
                title: error?.response?.data?.message || "Error creating campaign"
            }));
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="md:pl-10 lg:pl-[93px] md:pr-[52px] w-full md:mt-3">
            <form className="md:space-y-6 space-y-1 bg-white dark:bg-dark-500 shadow-md md:py-10 py-6 lg:px-[66px] md:px-8 px-5 md:rounded-lg rounded-2xl text-neutral-400">
                <h1 className=" flex items-center md:text-2xl text-base font-bold bg-neutral-50 dark:bg-dark-200 dark:text-white md:py-4 py-3 md:px-[59px] px-5 w-fit mx-auto rounded-lg gap-2 md:mb-10 mb-5">
                    Start a Campaign <Image src={Rocket} alt="" width={28} height={28} className="md:w-7 md:h-7 w-[18px] h-[18px]" />
                </h1>
                <div className="grid md:grid-cols-2 lg:gap-11 gap-1">
                    <div>
                        <label className="block text-sm font-medium py-2">Campaign Title *</label>
                        <input
                            type="text"
                            className="w-full border border-whitish-200 rounded-lg py-4 px-6 focus:outline-none focus:ring-1 focus:ring-primary-600 placeholder:text-neutral-100 dark:placeholder:text-neutral-400 dark:text-white dark:bg-dark-500 dark:border-dark-200 focus:border-transparent"
                            placeholder="Write a title"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium py-2">
                            Select a category *
                        </label>
                        <div className="relative cursor-pointer group">
                            <select
                                className="w-full appearance-none border bg-white  border-whitish-200 rounded-md py-4 px-6 text-neutral-100 focus:outline-none focus:ring-1 focus:ring-primary-600 placeholder:text-neutral-100 dark:placeholder:text-neutral-400 dark:text-white dark:bg-dark-500 dark:border-dark-200 focus:border-transparent"
                            >
                                <option value="" disabled selected>
                                    Select a category
                                </option>

                                <option value="health" className="text-black">Health</option>
                                <option value="education" className="text-black">Education</option>
                            </select>
                            <div className="absolute pointer-events-none top-0 right-0 pr-6 py-4">
                                <Dropdown className="text-neutral-200 dark:text-dark-200" />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium py-2">Short Description *</label>
                    <textarea
                        className="resize-none w-full border border-whitish-200 rounded-lg py-4 px-6 focus:outline-none focus:ring-1 focus:ring-primary-600 placeholder:text-neutral-100 dark:placeholder:text-neutral-400 dark:text-white dark:bg-dark-500 dark:border-dark-200 focus:border-transparent"
                        rows={5}
                        placeholder="Write a short description..."
                    ></textarea>
                </div>

                <div>
                    <label className="block text-sm font-medium py-2">Story *</label>
                    <div className="border border-whitish-200 dark:border-dark-200 rounded-lg md:p-4">
                        <ReactQuill
                            theme="snow"
                            value={value}
                            onChange={setValue}
                            placeholder="Write your story......"
                            className="quill-editor w-auto"
                            modules={{
                                toolbar: [
                                    ["italic", "bold", "underline", "strike",
                                        "link", "image",
                                        { list: "ordered" }, { list: "bullet" },
                                        { align: [] }],
                                ],
                            }}
                            formats={[
                                "bold",
                                "italic",
                                "underline",
                                "strike",
                                "link",
                                "image",
                                "list",
                                "bullet",
                                "align",
                            ]}
                        />
                    </div>
                </div>
                <div className="py-4">
                    <div className="bg-secondary-400 text-white md:text-2xl text-xs flex md:gap-5 gap-2 items-center font-bold md:py-10 py-5 md:px-11 px-5 rounded-lg">
                        <MoneyBagIcon className="md:w-8 md:h-10 w-5 h-5" />You will get 90% of total raised
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-x-2 lg:gap-x-11 md:gap-y-6 gap-y-1">
                    <div>
                        <label className="block text-sm font-medium py-2">Goal *</label>
                        <input
                            type="number"
                            className="w-full border border-whitish-200 rounded-lg py-4 px-6 focus:outline-none focus:ring-1 focus:ring-primary-600 placeholder:text-neutral-100 dark:placeholder:text-neutral-400 dark:text-white dark:bg-dark-500 dark:border-dark-200 focus:border-transparent"
                            placeholder="$0.00 USD"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium py-2">Raised Amount *</label>
                        <input
                            type="number"
                            className="w-full border border-whitish-200 rounded-lg py-4 px-6 focus:outline-none focus:ring-1 focus:ring-primary-600 placeholder:text-neutral-100 dark:placeholder:text-neutral-400 dark:text-white dark:bg-dark-500 dark:border-dark-200 focus:border-transparent"
                            placeholder="$0.00 USD"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium py-2">Amount Prefilled</label>
                        <input
                            type="text"
                            className="w-full border border-whitish-200 rounded-lg py-4 px-6 focus:outline-none focus:ring-1 focus:ring-primary-600 placeholder:text-neutral-100 dark:placeholder:text-neutral-400 dark:text-white dark:bg-dark-500 dark:border-dark-200 focus:border-transparent"
                            placeholder="Amount Prefilled"
                        />
                        <p className="md:text-sm text-xs text-neutral-300 font-medium max-w-[387px] mt-4">It will help fill amount box by click, place each amount by
                            comma, ex: 10,20,30,40</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium py-2">Video</label>
                        <input
                            type="text"
                            className="w-full border border-whitish-200 rounded-lg py-4 px-6 focus:outline-none focus:ring-1 focus:ring-primary-600 placeholder:text-neutral-100 dark:placeholder:text-neutral-400 dark:text-white dark:bg-dark-500 dark:border-dark-200 focus:border-transparent"
                            placeholder="Video"
                        />
                        <p className="md:text-sm text-xs text-neutral-300 font-medium mt-4">Place Youtube or Vimeo Video URL</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium py-2">
                            Campaign End Method
                        </label>
                        <div className="relative cursor-pointer group">
                            <select
                                className="w-full appearance-none border bg-white border-whitish-200 rounded-md py-4 px-6 text-neutral-100 focus:outline-none focus:ring-1 focus:ring-primary-600 placeholder:text-neutral-100 dark:placeholder:text-neutral-400 dark:text-white dark:bg-dark-500 dark:border-dark-200 focus:border-transparent"
                            >
                                <option value="" disabled selected>
                                    Select one
                                </option>

                                <option value="date" className="text-black">By Date</option>
                                <option value="goal" className="text-black">By Goal</option>
                            </select>
                            <div className="absolute pointer-events-none top-0 right-0 pr-6 py-4">
                                <Dropdown className="text-neutral-200 dark:text-dark-200" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium py-2">
                            Country
                        </label>
                        <div className="relative cursor-pointer group">
                            <select
                                className="w-full appearance-none border bg-white border-whitish-200 rounded-md py-4 px-6 text-neutral-100 focus:outline-none focus:ring-1 focus:ring-primary-600 placeholder:text-neutral-100 dark:placeholder:text-neutral-400 dark:text-white dark:bg-dark-500 dark:border-dark-200 focus:border-transparent"
                            >
                                <option value="" disabled selected>
                                    Select a country
                                </option>

                                <option value="us" className="text-black">United States</option>
                                <option value="vn" className="text-black">Vietnam</option>
                            </select>
                            <div className="absolute pointer-events-none top-0 right-0 pr-6 py-4">
                                <Dropdown className="text-neutral-200 dark:text-dark-200" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium py-2">Start Date</label>
                        <input type="date" className="w-full border bg-white border-whitish-200 rounded-lg py-4 px-6 focus:outline-none focus:ring-1 focus:ring-primary-600 placeholder:text-neutral-100 dark:placeholder:text-neutral-400 dark:text-white dark:bg-dark-500 dark:border-dark-200 focus:border-transparent" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium py-2">End Date</label>
                        <input type="date" className="w-full border bg-white border-whitish-200 rounded-lg py-4 px-6 focus:outline-none focus:ring-1 focus:ring-primary-600 placeholder:text-neutral-100 dark:placeholder:text-neutral-400 dark:text-white dark:bg-dark-500 dark:border-dark-200 focus:border-transparent" />
                    </div>
                </div>

                <div className="text-center md:py-4 py-9">
                    <Link href={"/campaign"}>
                        <PrimaryButton type="submit" className="px-10">
                            Submit new campaign
                        </PrimaryButton>
                    </Link>

                </div>
            </form>
        </div>
    );
}
