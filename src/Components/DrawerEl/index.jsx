"use client";

import {
  Drawer,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import { Close, ExpandMore, ExpandLess } from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";

const CustomDrawer = ({ toggleDrawer, isDrawerOpen }) => {
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (key) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Services", href: "/services" },
    { label: "Contact Us", href: "/contact-us" },
    {
      label: "All Services",
      submenu: [
        {
          label: "Revenue Acceleration Consulting",
          submenu: [
            { label: "Lead Generation Process Set Up", href: "/lead-generation-process-setup" },
            { label: "Strategic account management", href: "/strategic-account-management" },
            { label: "Market Analysis", href: "/market-analysis" },
            { label: "Marketing Communication Strategy", href: "/marketing-communication" },
            { label: "Community Building", href: "/community-building" },
          ],
        },
        {
          label: "Sales and marketing team Management solution",
          submenu: [
            { label: "Sales & Marketing War Room", href: "/war-room" },
            { label: "Reporting Framework development", href: "/Sales-framework" },
            { label: "Learning centre", href: "/learning-centre" },
            { label: "Academy", href: "/academy" },
          ],
        },
        {
          label: "Sales team building solution",
          submenu: [
            { label: "Leadership Hiring & Mentoring", href: "/leadership-hiring-and-mentoring" },
            { label: "Sales-Ready ManPower : Pre-Trained Talent", href: "/sales-ready-manpower" },
            { label: "Master Class", href: "/master-class" },
            { label: "Interview as a services", href: "/interview" },
            { label: "Marketing Support", href: "/marketing-support" },
          ],
        },
      ],
    },
    {
      label: "Resources",
      submenu: [
        { label: "FAQs", href: "/faqs" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Blogs", href: "/blog" },
        { label: "Free Resources", href: "/free-resources" },
      ],
    },
  ];

  const renderLinks = (items, depth = 0) =>
    items.map((item) => {
      const isOpen = openSubmenus[item.label] || false;
      const hasSubmenu = Array.isArray(item.submenu);

      return (
        <div key={item.label} style={{ paddingLeft: depth * 16 }}>
          <ListItem button onClick={() => (hasSubmenu ? toggleSubmenu(item.label) : toggleDrawer())}>
            {hasSubmenu ? (
              <>
                <ListItemText primary={item.label} />
                {isOpen ? <ExpandLess /> : <ExpandMore />}
              </>
            ) : (
              <Link href={item.href} passHref legacyBehavior>
                <a style={{ textDecoration: "none", color: "inherit", width: "100%" }}>
                  <ListItemText primary={item.label} />
                </a>
              </Link>
            )}
          </ListItem>

          {hasSubmenu && (
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {renderLinks(item.submenu, depth + 1)}
              </List>
            </Collapse>
          )}
        </div>
      );
    });

  return (
    <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
      <div style={{ width: 280, backgroundColor: "#f5f5f5", height: "100%" }}>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <IconButton onClick={toggleDrawer}>
            <Close />
          </IconButton>
        </div>
        <List>{renderLinks(navigationLinks)}</List>
        <div className="p-4 mt-4">
          <a
            href="https://calendly.com/salessyllabus"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block"
          >
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={toggleDrawer}
            >
              Book Appointment
            </Button>
          </a>
        </div>
      </div>
    </Drawer>
  );
};

export default CustomDrawer;
