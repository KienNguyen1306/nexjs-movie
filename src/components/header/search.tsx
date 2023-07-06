"use client";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/navigation";

function FormSearch() {
  const router = useRouter();
  const [dataForm, setDataForm] = useState("");

  function hanleOnchang(e: any) {
    setDataForm(e.target.value);
  }
  function hanlhleSubmit(e: any) {
    e.preventDefault();
    router.push(`/search/?query=${dataForm}`);
  }
  return (
    <form className="form" onSubmit={hanlhleSubmit}>
      <div className="controll">
        <input type="text" placeholder="search" onChange={hanleOnchang} />
        <button type="submit" className="icon-search">
          <AiOutlineSearch className="icon" />
        </button>
      </div>
    </form>
  );
}

export default FormSearch;
