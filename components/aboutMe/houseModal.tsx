import React from "react";
import Image from "next/image";
import { AiFillCloseCircle } from "react-icons/ai";

export const HouseModal: React.FC = () => {
  return (
    <div>
      <div
        className="fixed inset-0 z-50 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal={true}
        data-cy="bank-modal"
      >
        <div className="flex items-center justify-center bg-gray-helper text-center sm:block sm:p-0">
          <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
            &#8203;
          </span>
          <div className="relative z-50 inline-block h-full w-full transform overflow-hidden bg-white-surface text-left align-middle shadow-xl transition-all sm:max-w-lg sm:align-middle md:h-auto">
            <div className="flex h-full flex-col">
              <div className="m-auto w-96 px-6 lg:p-0">
                <div className="h-18 w-full flex-none items-center">
                  <button
                    data-dd-action-name="home:connect-bank-account:close"
                    data-cy="close-modal"
                    role="link"
                    className="text-bold w-full pt-7 pr-4 text-right"
                    // onClick={onClose}
                  >
                    <div className="float-right">
                      <AiFillCloseCircle />
                    </div>
                  </button>
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
