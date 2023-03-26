import {SiteTheme} from '../../models/theme/site-theme';
import {UserTheme} from '../../models/theme/user-theme';

export const createTheme = async (req: any, res: any) => {
  const { theme, description, userId } = req.body;
  try {
    const newTheme = await SiteTheme.create({
      theme,
      description,
      userId
    });
    // await UserTheme.create({
    //   theme,
    //   description,
    // });
    res.json(newTheme);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};


export const getMyTheme = async (req: any, res: any) => {
  const { userId } = req.params;
  console.log("project id is: ", userId);
  try {
    const theme = await UserTheme.findAll({
      attributes: [
        "id",
        "theme",
        "description",
      ],
      where: { id: userId },
    });
    console.log("theme; ", theme);
    res.json(theme);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllThemeSite = async (_req: any, res: any) => {
  try {
    const theme = await SiteTheme.findAll({
      attributes: [
        "id",
        "theme",
        "description",
      ],
    });
    console.log("theme; ", theme);
    res.json(theme);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

