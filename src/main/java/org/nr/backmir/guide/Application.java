package org.nr.backmir.guide;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;

@Controller
@SpringBootApplication
public class Application {
    private static final Date SERVER_START_DATE = new Date();

    public static void main(String args[]) {
        SpringApplication.run(Application.class, args);
    }

    private void setCommonVarToModel(Model model) {
        model.addAttribute("serverStartDate", SERVER_START_DATE);
    }

    @RequestMapping(value = {"/", "", "index"})
    public String index(HttpServletRequest request, HttpServletResponse response, Model model) {
        setCommonVarToModel(model);
        return "index";
    }

    @RequestMapping(value = "/{pageName}")
    public String page(@PathVariable(value = "pageName") String pageName, Model model) {
        setCommonVarToModel(model);
        return pageName;
    }
}
