"use client";

import { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { caseStudies } from "./data/case-studies";
import CaseStudyCard from "./case-study-card";
import CaseStudyDetail from "./case-study-detail";

export default function CaseStudiesShowcase() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [filteredCases, setFilteredCases] = useState(caseStudies);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCases, setVisibleCases] = useState(6);

  const industries = [
    "All",
    "Finance",
    "Healthcare",
    "E-commerce",
    "Education",
    "Manufacturing",
    "Technology",
    "Retail",
  ];

  useEffect(() => {
    let result = caseStudies;
    if (activeFilter !== "all") {
      result = result.filter(
        (cs) => cs.industry.toLowerCase() === activeFilter.toLowerCase()
      );
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (cs) =>
          cs.title.toLowerCase().includes(query) ||
          cs.description.toLowerCase().includes(query) ||
          cs.industry.toLowerCase().includes(query)
      );
    }
    setFilteredCases(result);
  }, [activeFilter, searchQuery]);

  const handleCaseClick = (caseStudy) => {
    setSelectedCase(caseStudy);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackClick = () => {
    setSelectedCase(null);
  };

  const loadMore = () => {
    setVisibleCases((prev) => Math.min(prev + 3, filteredCases.length));
  };

  return (
    <div className="pt-20 pb-5">
      <div className="mx-auto px-4">
        {!selectedCase ? (
          <>
            <div className="mb-12 max-w-3xl mx-auto text-center">
              {/* <div className="inline-block px-3 py-1 mb-4 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                Case Studies
              </div> */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Success Stories
              </h1>
              <p className="text-xl text-gray-600">
                Discover how we've helped organizations across industries solve complex challenges and
                achieve remarkable results.
              </p>
            </div>

            <div className="mb-10 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="relative w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <SearchIcon className="absolute left-3 top-2.5 text-gray-400" />
              </div>

              <div className="flex items-center space-x-2 w-full md:w-auto">
                <FilterListIcon className="text-gray-500" />
                <span className="text-gray-700 font-medium">Filter by Industry:</span>
                <div className="relative inline-block w-full md:w-auto">
                  <select
                    value={activeFilter}
                    onChange={(e) => setActiveFilter(e.target.value.toLowerCase())}
                    className="appearance-none w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {industries.map((industry) => (
                      <option key={industry} value={industry.toLowerCase()}>
                        {industry}
                      </option>
                    ))}
                  </select>
                  <KeyboardArrowDownIcon className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {filteredCases.length === 0 ? (
              <div className="text-center py-16 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-medium text-gray-700 mb-2">No case studies found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setActiveFilter("all");
                    setSearchQuery("");
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 text-gray-700"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {filteredCases.slice(0, visibleCases).map((caseStudy) => (
                    <CaseStudyCard
                      key={caseStudy.id}
                      caseStudy={caseStudy}
                      onClick={() => handleCaseClick(caseStudy)}
                    />
                  ))}
                </div>

                {visibleCases < filteredCases.length && (
                  <div className="text-center">
                    <button
                      onClick={loadMore}
                      className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50"
                    >
                      Load More Case Studies
                    </button>
                  </div>
                )}
              </>
            )}

            <div className="mt-20 bg-blue-600 rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Ready to transform your business?
                  </h2>
                  <p className="text-blue-100 mb-8">
                    Let's discuss how our solutions can address your unique challenges and drive growth for
                    your organization.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50">
                      Schedule a Consultation
                    </button>
                    <button className="border border-white text-white px-4 py-2 rounded-md hover:bg-blue-700">
                      View Our Services
                    </button>
                  </div>
                </div>
                <div className="bg-blue-700 p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <CheckCircleIcon className="text-blue-300 mr-2" />
                      <h3 className="text-xl font-semibold text-white">Proven Results</h3>
                    </div>
                    <p className="text-blue-100 pl-8">
                      Our clients see an average of 40% improvement in operational efficiency.
                    </p>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <CheckCircleIcon className="text-blue-300 mr-2" />
                      <h3 className="text-xl font-semibold text-white">Industry Expertise</h3>
                    </div>
                    <p className="text-blue-100 pl-8">
                      Specialized knowledge across 8+ industries and various technologies.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <CheckCircleIcon className="text-blue-300 mr-2" />
                      <h3 className="text-xl font-semibold text-white">Dedicated Support</h3>
                    </div>
                    <p className="text-blue-100 pl-8">
                      Ongoing partnership with 24/7 support and regular strategy reviews.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <CaseStudyDetail caseStudy={selectedCase} onBack={handleBackClick} />
        )}
      </div>
    </div>
  );
}