import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Rating from "react-rating-stars-component";

export default function ReviewModal({
  isOpen,
  setIsOpen,
  handleRating,
  ...props
}) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Add review
                </Dialog.Title>
                <div className="mt-2 flex flex-col gap-2">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <input type="radio" name="rating" id="dining" />
                      <label htmlFor="dining">Dining</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="radio" name="rating" id="delivery" />
                      <label htmlFor="delivery">Delivery</label>
                    </div>
                  </div>
                  <Rating count={5} size={24} onChange={handleRating} />
                  <form className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2 w-full">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        name="review"
                        id="subject"
                        placeholder="Amazing food!"
                        className="w-full border border-gra-400 focus:outline-none focus:border-zmtcolor-400 rounded-lg px-2 py-1"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="reviewText">Write your review</label>
                      <textarea
                        name="review"
                        id="reviewText"
                        cols="30"
                        rows="5"
                        placeholder="What did you like about the food?"
                        className="w-full border border-gra-400 focus:outline-none focus:border-zmtcolor-400 rounded-lg px-2 py-1"
                      ></textarea>
                    </div>
                  </form>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
