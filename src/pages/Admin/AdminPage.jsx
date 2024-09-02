import axios from "../../api/axios";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { getNews } from "../../api/handlers";
import logo from "../../assets/logo.png";
import CardAdminNew from "./CardAdminNew";
import TournamentsForm from "./TournamentsForm";

const AdminPage = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const [user, setUser] = useState({});
  const [allNotices, setAllNotices] = useState([]);
  const [allTournaments, setAllTournaments] = useState([]);

  const [noticeSelected, setNoticeSelected] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [image, setImage] = useState({});
  const [images, setImages] = useState([]);
  const [loadingImage, setLoadingImage] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    verifyAuth();
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await getNews();
        /* console.log("News Data:", newsData); */
        setAllNotices(newsData);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    if (noticeSelected !== null) {
      reset({
        _id: noticeSelected._id,
        description: noticeSelected.description,
        title: noticeSelected.title,
        content: noticeSelected.content,
        category: noticeSelected.category,
        isActive: false,
      });
    } else {
      reset({
        _id: "",
        description: "",
        title: "",
        content: "",
        isActive: false,
        category: "",
      });
    }
  }, [noticeSelected]);

  const logout = () => {
    axios
      .post("/auth/logout")
      .then((res) => {
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };
  const verifyAuth = async () => {
    try {
      const res = await axios
        .get("/auth/verify")
        .then((res) => {
          setUser(res.data);
        })
        .catch((error) => {
          if (error) {
            navigate("/login");
          }
        });
    } catch (error) {
      console.error(error);
    }
  };
  const selectNotice = (notice, _id) => {
    setNoticeSelected(notice);
  };

  const deleteNotice = (id) => {
    axios
      .delete(`/news/${id}`)
      .then(() => {
        // Filtrar la EVA eliminada del estado actual
        setAllNotices((prevEvas) => prevEvas.filter((eva) => eva._id !== id));
      })
      .catch((error) => console.error(error));
  };

  const editNotice = (notice, id) => {
    axios
      .put(`/news/${notice._id}`, notice)
      .then((res) => {
        const updatedNotice = res.data;
        const updatedNotices = allNotices.map((item) =>
          item._id === updatedNotice._id ? updatedNotice : item
        );
        setAllNotices(updatedNotices);
        setNoticeSelected(null);
      })
      .catch((error) => console.error(error));
  };

  async function handleImage(e) {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "FaustinoOro");
    data.append("folder", "FaustinoOro");

    setLoadingImage(true);
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/najdorf/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const file = await res.json();
      setImages([
        ...images,
        {
          public_id: file.public_id,
          secure_url: file.secure_url,
        },
      ]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingImage(false);
    }
  }
  function handleDelete(event) {
    setImages(images.filter((e) => e !== event));
  }

  const submit = (data) => {
    if (noticeSelected !== null) {
      editNotice(data);
    } else {
      const newNotice = {
        title: data.title,
        description: data.description,
        content: data.content,
        category: data.category,
        isActive: data.isActive,
        images: images,
      };
      axios
        .post("/news", newNotice)
        .then((res) => {
          // Utiliza la respuesta del backend para obtener la nueva EVA con el _id asignado
          const createdNotice = res.data;
          setAllNotices([...allNotices, createdNotice]); // Agrega la EVA con su _id al estado
        })
        .catch((error) => console.error(error));
    }
    alert("NOTICIA CREADA EXITOSAMENTE");
  };
  return (
    <section className="relative w-full bg-[#212121] min-h-[140vh] flex flex-col items-center  pb-10 overflow-hidden">
      <nav className="font-text2 text-xl  relative flex justify-between items-center w-full  mt-2 px-5 xl:mt-3 xl:px-16 xl:text-2xl  2xl:px-20 ">
        <picture className="w-16 h-16 flex items-center justify-center rounded-full  2xl:w-20 2xl:h-20 ">
          <img className="rounded-full" src={logo} alt="logo" />
        </picture>
        <ul className="flex gap-6 xl:gap-10 2xl:gap-12">
          <li className="text-gray-50 border-l-2 pl-2 xl:pl-3 py-1 hover:scale-105 hover:text-white duration-500 ">
            <Link to={"/"}>Home </Link>
          </li>
          <li
            onClick={() => logout()}
            className="text-gray-400 border-l-2 pl-2 xl:pl-3 py-1 border-gray-400 cursor-pointer  hover:scale-105 hover:text-white duration-500"
          >
            Logout
          </li>
        </ul>
      </nav>

      <section className="mt-12 w-full flex flex-col items-center px-4  ">
        <section
          style={{
            backgroundImage:
              "linear-gradient(to right top, #242427, #2b2a30, #33303a, #3c3542, #463b4b, #554255, #65495e, #765066, #905a6f, #aa6575, #c37278, #da8078)",
          }}
          className="w-full rounded-xl shadow-2xl shadow-black overflow-hidden py-8 px-4 space-y-8 md:w-[550px] xl:w-[700px]"
        >
          <h2 className="text-center font-title text-6xl font-extrabold text-white xl:text-7xl 2xl:text-8xl">
            NEWS FORM
          </h2>
          <p className="text-center text-gray-200 font-text text-base xl:text-lg 2xl:text-xl">
            Create your notice
          </p>
          <form onSubmit={handleSubmit(submit)} className="space-y-6">
            <div className="flex flex-col gap-8 xl:flex xl:flex-row ">
              <div className="relative font-text xl:w-1/2">
                <input
                  autoComplete="off"
                  placeholder="Joe Doe"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-white"
                  name="title"
                  {...register("title", {
                    required: {
                      value: true,
                      message: "Title is required",
                    },
                  })}
                />
                <label className="absolute left-0 -top-3.5 text-gray-100 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">
                  Title
                </label>
              </div>
              <div className="relative font-text xl:w-1/2">
                <input
                  autoComplete="off"
                  placeholder="category"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-white"
                  name="category"
                  {...register("category", {
                    required: {
                      value: false,
                    },
                  })}
                />
                <label className="absolute left-0 -top-3.5 text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">
                  Category
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-6 xl:flex xl:flex-row  ">
              <div className="relative font-text xl:w-1/2">
                <input
                  autoComplete="off"
                  placeholder="john@example.com"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-white "
                  name="description"
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Description is required",
                    },
                  })}
                />
                <label className="absolute left-0 -top-3.5 text-gray-100 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">
                  Description
                </label>
              </div>
              <div className="relative font-text flex gap-6 items-center">
                <p className="text-gray-400">Is Active?</p>
                <label className="container-checkbox">
                  <input
                    autoComplete="off"
                    type="checkbox"
                    {...register("isActive")}
                  />
                  <svg viewBox="0 0 64 64" height="2em" width="2em">
                    <path
                      d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                      pathLength="575.0541381835938"
                      className="path"
                    ></path>
                  </svg>
                </label>
              </div>
            </div>

            <div className="relative font-text text-gray-400  flex gap-2 flex-col justify-center items-center">
              <p className="self-start text-base">Content</p>{" "}
              <textarea
                placeholder=""
                className=" text-white bg-transparent border-[2px]  w-full xl:text-base rounded-lg p-2"
                name="content"
                id="content"
                {...register("content")}
                rows="5"
                cols="30"
              />
            </div>

            <div className="flex flex-col items-center gap-5 ">
              <label className="font-light text-gray-400 text-xl">
                Imágenes
              </label>
              <input
                type="file"
                name="image"
                accept=".jpg, .png, .jpeg"
                onChange={(e) => handleImage(e)}
                className=" rounded-lg flex-1  appearance-none w-full  max-w-[400px] py-2 px-4 border border-gray-400 text-white placeholder-white text-sm focus:outline-none focus:border-transparent"
              />
              {loadingImage ? (
                <h3>Cargando imagen...</h3>
              ) : (
                <div className="lg:flex gap-5 xl:gap-10">
                  {images?.map((img) => (
                    <div key={img?.public_id} className="relative">
                      <button
                        type="button"
                        onClick={() => handleDelete(img)}
                        className="absolute right-0 px-2 border-2 border-gray-400  flex items-center rounded-sm font-bold text-white bg-red-700"
                      >
                        X
                      </button>
                      <img
                        className="w-32 h-32 object-cover 2xl:w-36 2xl:h-36"
                        src={img?.secure_url}
                        alt=""
                        width="300px"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center justify-center ">
              <button
                className="w-full font-text  py-2 px-4 border-[1px] border-slate-100 hover:bg-gray-300 rounded-md shadow-lg text-white font-semibold transition duration-200 hover:text-gray-500 xl:w-[70%] xl:self-center "
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </section>

        <section className="flex flex-wrap  gap-y-6 gap-x-4 my-16 justify-center items-start md:gap-y-10 xl:mt-24 xl:gap-x-10 xl:gap-y-8">
          {allNotices !== null &&
            allNotices?.map((notice, index) => (
              <div key={notice?._id || index}>
                <CardAdminNew
                  notice={notice}
                  selectNotice={selectNotice}
                  deleteNotice={deleteNotice}
                />
              </div>
            ))}
        </section>

        <section className="">
          <TournamentsForm />
        </section>
        <div className="absolute bottom-2">{/*  <Footer /> */}</div>
      </section>
    </section>
  );
};
export default AdminPage;
